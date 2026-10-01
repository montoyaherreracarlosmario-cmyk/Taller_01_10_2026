// Frontend: se comunica con la API usando fetch.
const API = '/api/vehiculos';
const formulario = document.getElementById('formulario');
const lista = document.getElementById('lista');
const mensaje = document.getElementById('mensaje');
const total = document.getElementById('total');

// Cargar y mostrar los vehículos
async function cargar() {
  const respuesta = await fetch(API);
  const vehiculos = await respuesta.json();
  mostrar(vehiculos);
}

function mostrar(vehiculos) {
  lista.innerHTML = '';
  total.textContent = vehiculos.length === 1
    ? '1 vehículo registrado'
    : `${vehiculos.length} vehículos registrados`;

  if (vehiculos.length === 0) {
    const vacio = document.createElement('li');
    vacio.className = 'vacio';
    vacio.textContent = 'Aún no hay vehículos. Registra el primero con el formulario.';
    lista.appendChild(vacio);
    return;
  }

  vehiculos.forEach(v => {
    const li = document.createElement('li');

    const datos = document.createElement('div');
    datos.className = 'datos';
    const nombre = document.createElement('strong');
    nombre.textContent = v.nombre;
    const marca = document.createElement('span');
    marca.textContent = v.marca;
    datos.append(nombre, marca);

    const km = document.createElement('span');
    km.className = 'km';
    km.textContent = v.kilometraje.toLocaleString('es-CO') + ' km';

    const borrar = document.createElement('button');
    borrar.className = 'borrar';
    borrar.textContent = 'Eliminar';
    borrar.addEventListener('click', () => eliminar(v.id));

    li.append(datos, km, borrar);
    lista.appendChild(li);
  });
}

// Registrar un vehículo nuevo
formulario.addEventListener('submit', async (e) => {
  e.preventDefault();
  mensaje.textContent = '';

  const datos = {
    nombre: document.getElementById('nombre').value,
    marca: document.getElementById('marca').value,
    kilometraje: document.getElementById('kilometraje').value
  };

  const respuesta = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  });

  if (!respuesta.ok) {
    const error = await respuesta.json();
    mensaje.textContent = error.error;
    return;
  }
  formulario.reset();
  cargar();
});

// Eliminar un vehículo
async function eliminar(id) {
  if (!confirm('¿Eliminar este vehículo?')) return;
  await fetch(`${API}/${id}`, { method: 'DELETE' });
  cargar();
}

cargar();
