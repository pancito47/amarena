const horasDisponibles = ["9:00","10:00","11:00","12:00", "13:00", "14:00","15:00","16:00","17:00","18:00","19:00", "20:00", "21:00", "22:00","23:00"];
    const selectHora = document.getElementById("horaReserva");
    horasDisponibles.forEach(h => {
      let op = document.createElement("option");
      op.value = h;
      op.textContent = h;
      selectHora.appendChild(op);
    });

    const mesasDiv = document.getElementById("mesas");
    const mesas = [1,2,3,4,5,6,7,8,9,10]; // mesas
    let ocupadas = JSON.parse(localStorage.getItem("mesasOcupadas")) || [];

    function renderMesas() {
      mesasDiv.innerHTML = "";
      mesas.forEach(m => {
        let btn = document.createElement("button");
        btn.textContent = "Mesa " + m;
        btn.className = ocupadas.includes(m) ? "ocupada" : "libre";
        btn.disabled = ocupadas.includes(m);

        btn.onclick = () => {
          document.getElementById("mesaSeleccionada").value = m;
          document.getElementById("fechaSeleccionada").value = document.getElementById("fechaReserva").value;
          document.getElementById("horaSeleccionada").value = document.getElementById("horaReserva").value;
          alert("Seleccionaste Mesa " + m);
        };
        mesasDiv.appendChild(btn);
      });
    }
    renderMesas();