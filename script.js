document.getElementById("appointmentForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  let name = document.getElementById("name").value;
  let doctor = document.getElementById("doctor").value;
  let date = document.getElementById("date").value;
  
  document.getElementById("msg").innerText = 
    `✅ Appointment booked for ${name} with ${doctor} on ${date}`;
  
  this.reset();
  saveAppointment(name, doctor, date);
  displayHistory();
});

function saveAppointment(name, doctor, date) {
  let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
  appointments.push({ name: name, doctor: doctor, date: date, status: 'booked' });
  localStorage.setItem('appointments', JSON.stringify(appointments));
}

function displayHistory() {
  let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
  let historyTable = document.getElementById('appointmentHistory');
  historyTable.innerHTML = ''; // Clear existing rows

  appointments.forEach(appointment => {
    let row = `<tr>
                  <td>${appointment.name}</td>
                  <td>${appointment.doctor}</td>
                  <td>${appointment.date}</td>
                  <td>${appointment.status}</td>
                </tr>`;
    historyTable.innerHTML += row;
  });
}

displayHistory(); // Initial display on page load
