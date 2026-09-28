const projects = [
    {
        id: 1,
        title: "Determinação do peso vivo, escore de condição corporal e medidas morfométricas de suínos a partir do uso de imagens digitais e IA",
        type: "IC / TCC",
        status: "Análise de Dados",
        statusColor: "blue",
        period: "Set 2026 - Ago 2027",
        schedule: "Fase de coleta finalizada. Início da redação e análise.",
        responsibles: ["Prof. Dr. João Batista Gonçalves Costa Junior"],
        students: ["Reinaldo (IC)"],
        demands: "Ressubmissão do projeto; Submissão de pelo menos quatro artigos científicos com os dados coletados."
    },
    {
        id: 2,
        title: "Correlação entre imagem ultrassonográfica e termográfica por IA com ocorrência de mastite em vacas Girolando",
        type: "IC / TCC",
        status: "Coleta de Dados",
        statusColor: "amber",
        period: "Set 2025 - Set 2027",
        schedule: "Iniciando o segundo ano de avaliações na Fazenda Experimental.",
        responsibles: ["Prof. Dr. João Batista Gonçalves Costa Junior"],
        students: ["Ana Mônica (IC)"],
        demands: "Compilação dos dados do primeiro ano; Retomada contínua das imagens em horários de ordenha."
    },
    {
        id: 3,
        title: "Termografia infravermelha: ferramenta para detectar crescimento folicular, prenhez e abortamento em fêmeas Girolando",
        type: "IC",
        status: "Coleta de Dados",
        statusColor: "amber",
        period: "Set 2025 - Set 2027",
        schedule: "Retomada das coletas a campo nos dias 0, 7, 8 e 10 do protocolo de IATF.",
        responsibles: ["Prof. Dr. João Batista Gonçalves Costa Junior"],
        students: ["Luiz Felipe dos Reis (IC)"],
        demands: "Análise de resultados prévios (ano 1); Uso do ultrassom e câmera termográfica em novos manejos."
    },
    {
        id: 4,
        title: "Prototipagem de dispositivo IoT de baixo custo para rastreamento de bovinos utilizando LoRa e ESP32",
        type: "Pesquisa",
        status: "Coleta de Dados",
        statusColor: "amber",
        period: "Set 2026 - Indefinido",
        schedule: "Início de operações marcado para o final de setembro/2026.",
        responsibles: ["Prof. Dr. João Batista Gonçalves Costa Junior"],
        students: ["Pedro Lucas"],
        demands: "Redação do projeto no sistema; Início imediato da fase de campo."
    },
    {
        id: 5,
        title: "Uso de imagens de drone e inteligência artificial para contagem de bovinos a pasto",
        type: "Pesquisa",
        status: "Escrita do Projeto",
        statusColor: "purple",
        period: "Out 2026 - Out 2028",
        schedule: "Início das atividades previsto para outubro/2026.",
        responsibles: ["A definir"],
        students: ["A definir"],
        demands: "Submissão oficial do projeto na PROPESQ."
    },
    {
        id: 6,
        title: "Predição de curva de crescimento de pastagem por satélite e drones",
        type: "Pesquisa (Parceria)",
        status: "Planejamento",
        statusColor: "emerald",
        period: "Out 2026 - Indefinido",
        schedule: "Início previsto para a 2ª ou 3ª semana de outubro/2026.",
        responsibles: ["NEPREC", "Grazing App"],
        students: ["A definir"],
        demands: "Articulação de parceria entre o laboratório e a empresa responsável; Início rápido das coletas."
    }
];

function getBadgeClasses(colorName) {
    const colors = {
        'amber': 'bg-amber-100 text-amber-800',
        'blue': 'bg-blue-100 text-blue-800',
        'emerald': 'bg-emerald-100 text-emerald-800',
        'purple': 'bg-purple-100 text-purple-800',
        'slate': 'bg-slate-100 text-slate-800'
    };
    return colors[colorName] || colors['slate'];
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    const totalBadge = document.getElementById('total-projects-badge');
    container.innerHTML = '';
    
    totalBadge.innerHTML = `<i class="fas fa-layer-group"></i> ${projects.length} Projetos`;

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between group";
        card.onclick = () => openModal(project.id);

        card.innerHTML = `
            <div>
                <div class="flex justify-between items-start mb-3">
                    <span class="px-2 py-1 rounded text-[10px] font-bold bg-slate-100 text-slate-600 uppercase tracking-wide border border-slate-200">
                        ${project.type}
                    </span>
                    <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold ${getBadgeClasses(project.statusColor)}">
                        ${project.status}
                    </span>
                </div>
                <h3 class="text-lg font-bold text-slate-800 leading-snug mb-2 group-hover:text-[#051b34] transition-colors">
                    ${project.title}
                </h3>
                <p class="text-sm text-slate-500 mb-4 line-clamp-2">
                    <i class="far fa-clock mr-1"></i> ${project.schedule}
                </p>
            </div>
            <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div class="flex -space-x-2 overflow-hidden">
                    ${project.responsibles.map(resp => `
                        <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://ui-avatars.com/api/?name=${encodeURIComponent(resp)}&background=random" alt="${resp}" title="${resp}">
                    `).join('')}
                </div>
                <span class="text-xs font-medium text-slate-500 flex items-center gap-1">
                    <i class="fas fa-user-graduate"></i> ${project.students.length} alunos
                </span>
            </div>
        `;
        container.appendChild(card);
    });
}

function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    document.getElementById('modal-type-badge').textContent = project.type;
    
    const statusBadge = document.getElementById('modal-status-badge');
    statusBadge.textContent = project.status;
    statusBadge.className = `px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide ${getBadgeClasses(project.statusColor)}`;
    
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-period').textContent = project.period;
    document.getElementById('modal-schedule').textContent = project.schedule;
    document.getElementById('modal-demands').textContent = project.demands || "Nenhuma demanda específica registrada no momento.";

    const respContainer = document.getElementById('modal-responsibles');
    respContainer.innerHTML = project.responsibles.map(resp => `
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-800 border border-slate-200">
            <i class="fas fa-user-tie text-slate-500 text-xs"></i> ${resp}
        </span>
    `).join('');

    const studentsContainer = document.getElementById('modal-students');
    studentsContainer.innerHTML = project.students.map(student => `
        <li class="flex items-center gap-2">
            <i class="fas fa-user-graduate text-slate-400 text-xs"></i> ${student}
        </li>
    `).join('');

    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    
    modal.classList.remove('hidden');
    setTimeout(() => {
        modalContent.classList.remove('modal-leave');
        modalContent.classList.add('modal-enter');
    }, 10);
    
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    
    modalContent.classList.remove('modal-enter');
    modalContent.classList.add('modal-leave');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 200);
}

document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('project-modal');
    if (event.key === "Escape" && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});