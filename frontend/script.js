async function submitFeedback() {
  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;
  const rating = document.getElementById("rating").value;
  const comment = document.getElementById("comment").value;

  if (!name || !subject || !rating || !comment) {
    alert("Please fill all fields!");
    return;
  }

  const feedback = { name, subject, rating: Number(rating), comment };
  await fetch('/api/feedback', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(feedback)
  });

  document.getElementById("name").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("rating").value = "";
  document.getElementById("comment").value = "";

  loadFeedback();
}

async function loadFeedback() {
  const res = await fetch('/api/feedback');
  const data = await res.json();
  const list = document.getElementById('feedbackList');
  list.innerHTML = '';

  data.slice().reverse().forEach(f => {
    const li = document.createElement('li');
    li.innerHTML = `<b>${f.name}</b> (${f.subject}) -  ${f.rating}<br>${f.comment}`;
    list.appendChild(li);
  });
}

loadFeedback();
