function showDonationModal() {
    // Iniciar descarga
    downloadGuide();
    
    // Mostrar modal después de un pequeño delay
    setTimeout(() => {
        document.getElementById('donationModal').classList.add('active');
    }, 500);
}

function downloadGuide() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Configuración
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 20;
    const maxWidth = pageWidth - (margin * 2);
    let yPosition = 20;
    
    // Función para agregar nueva página si es necesario
    function checkPageBreak(neededSpace) {
        if (yPosition + neededSpace > pageHeight - 20) {
            doc.addPage();
            yPosition = 20;
            return true;
        }
        return false;
    }
    
    // Función para agregar texto con saltos de línea automáticos
    function addText(text, fontSize, isBold = false, color = [0, 0, 0]) {
        doc.setFontSize(fontSize);
        doc.setFont(undefined, isBold ? 'bold' : 'normal');
        doc.setTextColor(color[0], color[1], color[2]);
        
        const lines = doc.splitTextToSize(text, maxWidth);
        const lineHeight = fontSize * 0.5;
        
        lines.forEach((line) => {
            checkPageBreak(lineHeight);
            doc.text(line, margin, yPosition);
            yPosition += lineHeight;
        });
    }
    
    // Título principal
    doc.setFillColor(44, 95, 141);
    doc.rect(0, 0, pageWidth, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont(undefined, 'bold');
    doc.text('GUÍA PRÁCTICA DE', pageWidth / 2, 15, { align: 'center' });
    doc.text('AHORRO FAMILIAR', pageWidth / 2, 25, { align: 'center' });
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.text('Recursos para el Desarrollo Social', pageWidth / 2, 33, { align: 'center' });
    
    yPosition = 55;
    
    // Contenido
    addText('INTRODUCCIÓN', 14, true, [44, 95, 141]);
    yPosition += 5;
    addText('Esta guía ha sido elaborada para brindar herramientas prácticas de gestión financiera familiar, con enfoque en la realidad económica peruana y las necesidades de los sectores populares.', 10);
    yPosition += 8;
    
    addText('1. ANÁLISIS DE LA SITUACIÓN ECONÓMICA FAMILIAR', 12, true, [44, 95, 141]);
    yPosition += 5;
    addText('1.1 Registro de Ingresos y Gastos', 11, true);
    yPosition += 2;
    addText('• Llevar un registro diario durante al menos un mes', 10);
    addText('• Categorizar todos los gastos (fijos y variables)', 10);
    addText('• Identificar patrones de consumo', 10);
    addText('• Reconocer gastos innecesarios', 10);
    yPosition += 5;
    
    addText('1.2 Principales Categorías de Gasto', 11, true);
    yPosition += 2;
    addText('a) Necesidades básicas (alimentos, vivienda, salud)', 10);
    addText('b) Servicios públicos (luz, agua, internet)', 10);
    addText('c) Transporte', 10);
    addText('d) Educación', 10);
    addText('e) Entretenimiento y recreación', 10);
    yPosition += 8;
    
    addText('2. METODOLOGÍA 50/30/20', 12, true, [44, 95, 141]);
    yPosition += 5;
    addText('Esta metodología propone distribuir los ingresos de la siguiente forma:', 10);
    yPosition += 5;
    
    doc.setFillColor(211, 84, 0);
    doc.rect(margin, yPosition - 5, maxWidth, 8, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.text('50% - NECESIDADES BÁSICAS', margin + 3, yPosition);
    yPosition += 8;
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    addText('Alimentos, vivienda, servicios, salud, transporte', 10);
    yPosition += 3;
    
    doc.setFillColor(211, 84, 0);
    doc.rect(margin, yPosition - 5, maxWidth, 8, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.text('30% - DESEOS Y CALIDAD DE VIDA', margin + 3, yPosition);
    yPosition += 8;
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    addText('Entretenimiento, salidas, compras no esenciales', 10);
    yPosition += 3;
    
    doc.setFillColor(211, 84, 0);
    doc.rect(margin, yPosition - 5, maxWidth, 8, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.text('20% - AHORRO E INVERSIÓN', margin + 3, yPosition);
    yPosition += 8;
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    addText('Fondo de emergencia, metas a futuro', 10);
    yPosition += 10;
    
    addText('3. ESTRATEGIAS DE AHORRO EFECTIVAS', 12, true, [44, 95, 141]);
    yPosition += 5;
    
    addText('3.1 En Alimentación (ahorro potencial: 30-40%)', 11, true);
    yPosition += 2;
    addText('• Planificar menús semanales', 10);
    addText('• Comprar en mercados locales', 10);
    addText('• Cocinar en casa', 10);
    addText('• Evitar desperdicios de alimentos', 10);
    yPosition += 5;
    
    addText('3.2 En Transporte (ahorro potencial: 20-30%)', 11, true);
    yPosition += 2;
    addText('• Usar transporte público', 10);
    addText('• Organizar movilidad compartida', 10);
    addText('• Caminar distancias cortas', 10);
    yPosition += 5;
    
    addText('3.3 En Servicios (ahorro potencial: 15-25%)', 11, true);
    yPosition += 2;
    addText('• Revisar suscripciones no utilizadas', 10);
    addText('• Optimizar uso de energía eléctrica', 10);
    addText('• Comparar tarifas de servicios', 10);
    yPosition += 8;
    
    checkPageBreak(40);
    addText('4. CONSTRUCCIÓN DE FONDO DE EMERGENCIA', 12, true, [44, 95, 141]);
    yPosition += 5;
    
    addText('4.1 Importancia', 11, true);
    yPosition += 2;
    addText('• Protección ante imprevistos (salud, pérdida de empleo)', 10);
    addText('• Reducción de estrés financiero', 10);
    addText('• Evitar endeudamiento en crisis', 10);
    yPosition += 5;
    
    addText('4.2 Meta Recomendada', 11, true);
    yPosition += 2;
    addText('• Objetivo mínimo: 3 meses de gastos básicos', 10);
    addText('• Objetivo ideal: 6 meses de gastos básicos', 10);
    yPosition += 5;
    
    addText('4.3 ¿Cómo Construirlo?', 11, true);
    yPosition += 2;
    addText('• Empezar con montos pequeños (S/ 50-100 mensuales)', 10);
    addText('• Guardar en cuenta separada', 10);
    addText('• Automatizar el ahorro (si es posible)', 10);
    yPosition += 10;
    
    checkPageBreak(100);
    addText('5. PLANTILLA DE PRESUPUESTO MENSUAL', 12, true, [44, 95, 141]);
    yPosition += 8;
    
    // Tabla de presupuesto
    doc.setFillColor(232, 244, 248);
    doc.rect(margin, yPosition - 5, maxWidth, 8, 'F');
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(44, 95, 141);
    doc.text('INGRESOS', margin + 3, yPosition);
    yPosition += 10;
    
    doc.setFont(undefined, 'normal');
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.text('Sueldo/salario principal:', margin + 5, yPosition);
    doc.text('S/ __________', maxWidth + margin - 30, yPosition);
    yPosition += 6;
    doc.text('Ingresos adicionales:', margin + 5, yPosition);
    doc.text('S/ __________', maxWidth + margin - 30, yPosition);
    yPosition += 6;
    doc.text('Otros ingresos:', margin + 5, yPosition);
    doc.text('S/ __________', maxWidth + margin - 30, yPosition);
    yPosition += 8;
    
    doc.setDrawColor(44, 95, 141);
    doc.setLineWidth(0.5);
    doc.line(margin, yPosition, maxWidth + margin, yPosition);
    yPosition += 5;
    doc.setFont(undefined, 'bold');
    doc.text('TOTAL INGRESOS:', margin + 5, yPosition);
    doc.text('S/ __________', maxWidth + margin - 30, yPosition);
    yPosition += 12;
    
    doc.setFillColor(232, 244, 248);
    doc.rect(margin, yPosition - 5, maxWidth, 8, 'F');
    doc.setFontSize(11);
    doc.setTextColor(44, 95, 141);
    doc.text('GASTOS FIJOS', margin + 3, yPosition);
    yPosition += 10;
    
    doc.setFont(undefined, 'normal');
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    const gastosF = ['Alquiler/hipoteca:', 'Luz:', 'Agua:', 'Gas:', 'Internet/teléfono:', 'Transporte:'];
    gastosF.forEach(gasto => {
        doc.text(gasto, margin + 5, yPosition);
        doc.text('S/ __________', maxWidth + margin - 30, yPosition);
        yPosition += 6;
    });
    yPosition += 2;
    
    doc.setLineWidth(0.5);
    doc.line(margin, yPosition, maxWidth + margin, yPosition);
    yPosition += 5;
    doc.setFont(undefined, 'bold');
    doc.text('Subtotal gastos fijos:', margin + 5, yPosition);
    doc.text('S/ __________', maxWidth + margin - 30, yPosition);
    yPosition += 12;
    
    checkPageBreak(80);
    
    doc.setFillColor(232, 244, 248);
    doc.rect(margin, yPosition - 5, maxWidth, 8, 'F');
    doc.setFontSize(11);
    doc.setTextColor(44, 95, 141);
    doc.text('GASTOS VARIABLES', margin + 3, yPosition);
    yPosition += 10;
    
    doc.setFont(undefined, 'normal');
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    const gastosV = ['Alimentación:', 'Artículos limpieza:', 'Artículos higiene:', 'Entretenimiento:', 'Ropa y calzado:', 'Otros:'];
    gastosV.forEach(gasto => {
        doc.text(gasto, margin + 5, yPosition);
        doc.text('S/ __________', maxWidth + margin - 30, yPosition);
        yPosition += 6;
    });
    yPosition += 2;
    
    doc.setLineWidth(0.5);
    doc.line(margin, yPosition, maxWidth + margin, yPosition);
    yPosition += 5;
    doc.setFont(undefined, 'bold');
    doc.text('Subtotal gastos variables:', margin + 5, yPosition);
    doc.text('S/ __________', maxWidth + margin - 30, yPosition);
    yPosition += 12;
    
    doc.setLineWidth(1);
    doc.line(margin, yPosition, maxWidth + margin, yPosition);
    yPosition += 6;
    
    doc.setFillColor(211, 84, 0);
    doc.rect(margin, yPosition - 5, maxWidth, 10, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);
    doc.text('DISPONIBLE PARA AHORRO:', margin + 3, yPosition);
    doc.text('S/ __________', maxWidth + margin - 30, yPosition);
    yPosition += 15;
    
    checkPageBreak(60);
    
    addText('6. CONSEJOS ADICIONALES', 12, true, [44, 95, 141]);
    yPosition += 5;
    
    addText('6.1 Revise su Situación Regularmente', 11, true);
    yPosition += 2;
    addText('Evaluación mensual de cumplimiento de presupuesto y ajuste de metas según cambios en la situación familiar.', 10);
    yPosition += 5;
    
    addText('6.2 Involucre a Toda la Familia', 11, true);
    yPosition += 2;
    addText('Comunicación abierta sobre finanzas y establecimiento de metas familiares compartidas.', 10);
    yPosition += 5;
    
    addText('6.3 Evite Deudas Innecesarias', 11, true);
    yPosition += 2;
    addText('Usar crédito solo para inversiones productivas y evitar préstamos para consumo.', 10);
    yPosition += 10;
    
    checkPageBreak(50);
    
    // Footer en última página
    doc.setFillColor(44, 62, 80);
    doc.rect(0, pageHeight - 25, pageWidth, 25, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(9);
    doc.text('Material de libre distribución con fines educativos y de desarrollo social', pageWidth / 2, pageHeight - 15, { align: 'center' });
    doc.text('www.ejemplo.org.pe | info@ejemplo.org.pe', pageWidth / 2, pageHeight - 8, { align: 'center' });
    
    // Guardar PDF
    doc.save('Guia-Ahorro-Familiar.pdf');
    
    // Contenido anterior para referencia (comentado)
    const guideContent = `
═══════════════════════════════════════════════════════════════
GUÍA PRÁCTICA DE AHORRO FAMILIAR
Recursos para el Desarrollo Social
═══════════════════════════════════════════════════════════════

INTRODUCCIÓN

Esta guía ha sido elaborada para brindar herramientas prácticas de 
gestión financiera familiar, con enfoque en la realidad económica 
peruana y las necesidades de los sectores populares.


1. ANÁLISIS DE LA SITUACIÓN ECONÓMICA FAMILIAR

1.1 Registro de Ingresos y Gastos
- Llevar un registro diario durante al menos un mes
- Categorizar todos los gastos (fijos y variables)
- Identificar patrones de consumo
- Reconocer gastos innecesarios o improductivos

1.2 Principales Categorías de Gasto
a) Necesidades básicas (alimentos, vivienda, salud)
b) Servicios públicos (luz, agua, internet)
c) Transporte
d) Educación
e) Entretenimiento y recreación
f) Otros gastos


2. METODOLOGÍA 50/30/20

Esta metodología propone distribuir los ingresos de la siguiente forma:

50% - NECESIDADES BÁSICAS
    Alimentos, vivienda, servicios, salud, transporte

30% - DESEOS Y CALIDAD DE VIDA
    Entretenimiento, salidas, compras no esenciales

20% - AHORRO E INVERSIÓN
    Fondo de emergencia, metas a futuro


3. ESTRATEGIAS DE AHORRO EFECTIVAS

3.1 En Alimentación (ahorro potencial: 30-40%)
- Planificar menús semanales
- Comprar en mercados locales
- Cocinar en casa
- Evitar desperdicios de alimentos
- Aprovechar productos de temporada

3.2 En Transporte (ahorro potencial: 20-30%)
- Usar transporte público
- Organizar movilidad compartida
- Caminar distancias cortas
- Mantener bicicleta como alternativa

3.3 En Servicios (ahorro potencial: 15-25%)
- Revisar suscripciones no utilizadas
- Optimizar uso de energía eléctrica
- Comparar tarifas de servicios
- Negociar mejores condiciones

3.4 En Compras (ahorro potencial: 25-35%)
- Hacer lista de compras y respetarla
- Evitar compras impulsivas
- Comparar precios antes de comprar
- Aprovechar ofertas reales (no falsas promociones)


4. CONSTRUCCIÓN DE FONDO DE EMERGENCIA

4.1 Importancia
- Protección ante imprevistos (salud, pérdida de empleo)
- Reducción de estrés financiero
- Evitar endeudamiento en crisis

4.2 Meta Recomendada
- Objetivo mínimo: 3 meses de gastos básicos
- Objetivo ideal: 6 meses de gastos básicos

4.3 ¿Cómo Construirlo?
- Empezar con montos pequeños (S/ 50-100 mensuales)
- Guardar en cuenta separada
- Automatizar el ahorro (si es posible)
- Incrementar el monto progresivamente


5. PLANTILLA DE PRESUPUESTO MENSUAL

INGRESOS:
Sueldo/salario principal:           S/ __________
Ingresos adicionales:               S/ __________
Otros ingresos:                     S/ __________
────────────────────────────────────────────────
TOTAL INGRESOS:                     S/ __________


GASTOS FIJOS:
Alquiler/hipoteca:                  S/ __________
Luz:                                S/ __________
Agua:                               S/ __________
Gas:                                S/ __________
Internet/teléfono:                  S/ __________
Transporte (pasajes):               S/ __________
────────────────────────────────────────────────
Subtotal gastos fijos:              S/ __________


GASTOS VARIABLES:
Alimentación:                       S/ __________
Artículos de limpieza:              S/ __________
Artículos de higiene:               S/ __________
Entretenimiento:                    S/ __________
Ropa y calzado:                     S/ __________
Otros:                              S/ __________
────────────────────────────────────────────────
Subtotal gastos variables:          S/ __________


TOTAL GASTOS:                       S/ __________
TOTAL INGRESOS:                     S/ __________
════════════════════════════════════════════════
DISPONIBLE PARA AHORRO:             S/ __________


6. CONSEJOS ADICIONALES

6.1 Revise su Situación Regularmente
- Evaluación mensual de cumplimiento de presupuesto
- Ajuste de metas según cambios en la situación familiar
- Celebración de logros alcanzados

6.2 Involucre a Toda la Familia
- Comunicación abierta sobre finanzas
- Establecimiento de metas familiares compartidas
- Educación financiera desde temprana edad

6.3 Evite Deudas Innecesarias
- Usar crédito solo para inversiones productivas
- Evitar préstamos para consumo
- Comparar tasas de interés antes de endeudarse

6.4 Busque Oportunidades de Ingresos Adicionales
- Desarrollo de habilidades monetizables
- Emprendimientos familiares
- Economía colaborativa


7. RECURSOS RECOMENDADOS

7.1 Aplicaciones Móviles
- Apps de presupuesto personal
- Registros de gastos
- Alertas de vencimientos

7.2 Educación Financiera
- Talleres comunitarios
- Cursos online gratuitos
- Materiales de educación popular

7.3 Apoyo Institucional
- Organizaciones de desarrollo social
- Programas municipales
- Grupos de ahorro comunitario


═══════════════════════════════════════════════════════════════

RECUERDE:

El ahorro es un hábito que se construye día a día. No se desanime 
si al principio los resultados son pequeños. Lo importante es 
mantener la constancia y el compromiso con sus metas familiares.

La administración responsable de los recursos económicos es una 
herramienta fundamental para el desarrollo y bienestar de su familia.

═══════════════════════════════════════════════════════════════

Este material es de libre distribución con fines educativos
y de desarrollo social.

Para más información sobre nuestros programas y recursos:
www.ejemplo.org.pe | info@ejemplo.org.pe

`;
}

function copyYapeNumber() {
    const yapeNumber = '999888777';
    navigator.clipboard.writeText(yapeNumber).then(() => {
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = '✓ Número Copiado';
        btn.style.background = '#27ae60';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '#722693';
        }, 2500);
    }).catch(() => {
        alert('Número de Yape: ' + yapeNumber);
    });
}

function closeModal() {
    document.getElementById('donationModal').classList.remove('active');
}

// Cerrar modal al hacer clic fuera
document.getElementById('donationModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});