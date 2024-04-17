// Importar los componentes
import createHeader from './header.jsx';
import createForm from './form.jsx';
import createIMCFooterSection from './imcFooter.jsx';
import createIMCAdviceSection from './imcAdvice.jsx';

// Seleccionar el div con id "app"
const appDiv = document.getElementById('app');

// Aplicar estilo al div para centrar los componentes
appDiv.style.display = 'flex';
appDiv.style.flexDirection = 'column';
appDiv.style.alignItems = 'center';

// Crear y agregar los componentes 
appDiv.appendChild(createHeader());
appDiv.appendChild(createForm());

// Agregar la sección de IMC y pie de página
appDiv.appendChild(createIMCFooterSection());
// Agregar la sección informativa dinámica 
appDiv.appendChild(createIMCAdviceSection());

