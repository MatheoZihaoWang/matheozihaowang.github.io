(function () {
  'use strict';

  var STORAGE_KEY = 'zihao-site-language';
  var exactZh = {
    'Menu': '菜单',
    'Home': '首页',
    'Research': '研究',
    'Join Us': '加入我们',
    'Contact': '联系',
    'Scholar': '学术主页',
    'Laplace Lab GitHub': 'Laplace Lab GitHub',
    'Zihao Wang home': '王子豪个人主页',
    'Main navigation': '主导航',
    'Language': '语言',
    'English': '英文',
    'Chinese': '中文',
    'Zihao Wang | AI for Science and Healthcare': '王子豪 | 科学与医疗人工智能',
    'Research | Zihao Wang': '研究 | 王子豪',
    'Join Us | Zihao Wang': '加入我们 | 王子豪',
    'Contact | Zihao Wang': '联系 | 王子豪',
    'News': '新闻',
    'zihao wang / news / archive': '王子豪 / 新闻 / 归档',
    'Zihao Wang is an Assistant Professor of Computer Science and Engineering at the University of Tennessee at Chattanooga, working on stochastic generative modeling, inverse problems, and AI for imaging.': '王子豪是田纳西大学查塔努加分校计算机科学与工程助理教授，研究随机生成建模、反问题与成像人工智能。',
    'Research and publications by Zihao Wang in stochastic generative modeling, inverse problems, and medical imaging.': '王子豪在随机生成建模、反问题与医学成像方面的研究与论文。',
    "Research opportunities with Zihao Wang and Laplace Lab for undergraduate, master's, PhD, and visiting researchers.": '王子豪与 Laplace Lab 面向本科生、硕士生、博士生和访问研究人员提供的研究机会。',
    'Contact Zihao Wang, PhD.': '联系王子豪博士。',

    "Zihao Wang, PhD (Inria'21) · 王子豪": '王子豪，博士（Inria 2021）· Zihao Wang',
    'Principle Generative AI Research and Broader Application': '面向广泛应用的生成式人工智能基础研究',
    'I am an Assistant Professor in Computer Science and Engineering at the University of Tennessee at Chattanooga and a Visiting Research Collaborator at the Athinoula A. Martinos Center for Biomedical Imaging, Massachusetts General Hospital and Harvard Medical School.': '我现任田纳西大学查塔努加分校计算机科学与工程助理教授，并担任麻省总医院与哈佛医学院 Athinoula A. Martinos 生物医学成像中心访问研究合作学者。',
    'Explore research': '浏览研究',
    'Get in touch': '联系我',
    'Recent news': '近期动态',
    'Latent Visual Contrastive Reasoning with Multi-Branch Exploration was accepted at IEEE BigData 2026.': '论文《Latent Visual Contrastive Reasoning with Multi-Branch Exploration》获 IEEE BigData 2026 接收。',
    'Co-advised student Jingbo Wang, jointly advised with Shaogang Ren at UTC, published SCDM at NeurIPS 2026.': '与 UTC 任少刚教授共同指导的学生王敬博在 NeurIPS 2026 发表 SCDM。',
    'I will serve ICLR as an Area Chair.': '我将担任 ICLR 领域主席。',
    'Applied AI and Industry Partnership Initiative': '应用人工智能与产业合作计划',
    'Lead PI': '首席项目负责人',
    'PhD Candidate Kegeng Tang’s CT-Bench accepted at COLM 2026': '博士生唐克耕的 CT-Bench 获 COLM 2026 接收',
    'New work on backward SDE-based diffusion accepted at ICML 2026': '倒向随机微分方程扩散模型研究获 ICML 2026 接收',
    'BlochShift accepted at IEEE IVMSP 2026': 'BlochShift 获 IEEE IVMSP 2026 接收',
    'Multi-modal graph transfer learning published at WWW 2026': '多模态图迁移学习研究发表于 WWW 2026',
    'Adaptive Domain Shift accepted at ICLR 2026': 'Adaptive Domain Shift 获 ICLR 2026 接收',
    'View news archive →': '查看新闻归档 →',
    'Selected recent work': '近期代表工作',
    'View publications and research areas →': '查看论文与研究方向 →',
    'About': '关于我',
    'Building principled learning systems for the real world.': '为真实世界构建有理论依据的学习系统。',
    'My research develops the theory and methods of backward stochastic processes for generative machine learning, and applies them to medical imaging, computational imaging, and inverse problems across engineering and the natural sciences.': '我的研究面向生成式机器学习发展倒向随机过程的理论与方法，并将其应用于医疗成像、计算成像，以及工程与自然科学中的反问题。',
    "Before joining UTC, I completed my postdoctoral training as a Research Fellow at the Athinoula A. Martinos Center for Biomedical Imaging at Massachusetts General Hospital and Harvard Medical School (2022–2024). I received my PhD with highest honors from Université Côte d'Azur / Inria, where my dissertation focused on deep generative learning for medical data processing, analysis, and modeling.": '加入 UTC 之前，我于麻省总医院与哈佛医学院 Athinoula A. Martinos 生物医学成像中心完成博士后研究训练（2022–2024）。我以最高荣誉获得蔚蓝海岸大学 / Inria 博士学位，博士论文聚焦于面向医疗数据处理、分析与建模的深度生成学习。',
    'I lead': '我负责',
    ', an open research group for principled AI. Follow our work on': '，这是一个研究有理论依据人工智能的开放团队。我们的工作发布于',
    'Work with me': '合作研究',
    'Interested in a research collaboration?': '有兴趣开展研究合作？',
    'I welcome conversations with students, clinicians, researchers, and industry partners working at the intersection of generative AI, imaging, and decision systems.': '欢迎从事生成式人工智能、成像与决策系统交叉研究的学生、临床医生、研究人员和产业伙伴与我交流。',

    'From stochastic processes to useful AI systems.': '从随机过程到实用的人工智能系统。',
    'My group develops theory and methods for backward stochastic processes in generative machine learning, then applies them to medical imaging, computational imaging, and inverse problems in engineering and the natural sciences.': '我的团队研究生成式机器学习中倒向随机过程的理论与方法，并将其应用于医疗成像、计算成像，以及工程与自然科学中的反问题。',
    'Research directions': '研究方向',
    'Generative models': '生成模型',
    'Diffusion models, latent-variable learning, score matching, and stochastic flow inference.': '扩散模型、隐变量学习、分数匹配与随机流推断。',
    'We study the mathematical principles that make generative learning reliable beyond unconstrained data synthesis. Our central interest is in backward stochastic processes: how distributions evolve, how information propagates through reverse-time dynamics, and how uncertainty can be represented throughout generation and inference.': '我们研究使生成学习超越无约束数据合成并具备可靠性的数学原理。核心关注倒向随机过程，包括分布如何演化、信息如何在逆时间动力学中传播，以及如何在生成与推断的全过程中表达不确定性。',
    'This perspective connects probabilistic modeling with observations, prior knowledge, physical laws, and terminal constraints. The goal is a general foundation for generative systems that are controllable, interpretable, and mathematically grounded, while remaining flexible enough to operate in complex data and scientific settings.': '这一视角将概率建模与观测、先验知识、物理规律和终端约束相结合，目标是为可控、可解释且具有数学基础的生成系统建立通用框架，同时保持处理复杂数据与科学问题所需的灵活性。',
    'Precision Imaging and Medical AI': '精准成像与医疗人工智能',
    'Physics-constrained reconstruction, medical image analysis, multimodal foundation models, and clinical decision support.': '物理约束重建、医学图像分析、多模态基础模型与临床决策支持。',
    'We connect the physics of image formation with anatomical understanding and clinical interpretation. This thrust treats reconstruction, analysis, and decision support as parts of one continuous problem: extracting reliable information from incomplete, noisy, heterogeneous, or multimodal medical data.': '我们将成像物理、解剖理解与临床解释联系起来，把重建、分析和决策支持视为同一连续问题的不同环节：从不完整、含噪、异质或多模态医疗数据中提取可靠信息。',
    'Our approach combines acquisition models, probabilistic reconstruction, cross-modal representation learning, and anatomy-aware reasoning. The broader aim is precision imaging that preserves clinically meaningful structure, quantifies uncertainty, adapts across settings, and supports medical AI that can be evaluated for both technical fidelity and practical usefulness.': '我们结合采集模型、概率重建、跨模态表征学习和解剖感知推理，发展能够保留临床重要结构、量化不确定性并适应不同场景的精准成像方法，支持在技术保真度和实际效用两方面均可评估的医疗人工智能。',
    'AI meets Sci&Engineering': '人工智能与科学工程',
    'Generative and agentic learning for inverse problems, scientific discovery, and engineering systems.': '面向反问题、科学发现与工程系统的生成式和智能体学习。',
    'We investigate how AI can become a reasoning partner for science and engineering rather than only a pattern-recognition tool. The focus is on systems that can understand complex processes, distinguish correlation from mechanism, adapt across domains, and incorporate the structure of real physical and engineered environments.': '我们研究人工智能如何成为科学与工程中的推理伙伴。重点是使系统能够理解复杂过程、区分相关性与机制、跨领域适应，并融入真实物理环境和工程系统的结构。',
    'This direction brings together causal and temporal reasoning, multimodal learning, tool use, domain constraints, and feedback from experiments or operations. Our long-term goal is to develop generalizable AI systems that can form and test hypotheses, solve inverse problems, and support reliable decisions in scientific discovery and engineering practice.': '这一方向融合因果与时序推理、多模态学习、工具使用、领域约束，以及来自实验或实际运行的反馈。长期目标是发展具有泛化能力的人工智能系统，使其能够提出并检验假设、求解反问题，并为科学发现和工程实践提供可靠决策支持。',
    'Open +': '展开 +',
    'Close −': '收起 −',
    'Close research overview and restore all three columns': '收起研究概述并恢复三列布局',
    'Selected publications': '代表论文',
    '2024 and earlier highlights': '2024 年及更早代表工作',
    'For the complete and continuously updated list, please visit': '完整且持续更新的论文列表请访问',
    '. Research code is maintained by': '。研究代码由',
    'Open research': '开放研究',
    'Collaboration and advising': '合作与指导',
    'I work with students and collaborators who are excited about rigorous AI methods and their use in scientific and clinical settings. If your interests overlap, please get in touch.': '我与重视严谨人工智能方法及其科学和临床应用的学生与合作者共同工作。如研究兴趣契合，欢迎联系。',

    'Research with Laplace Lab.': '加入 Laplace Lab 开展研究。',
    'We welcome students and visiting researchers who want to build principled AI systems for medical imaging, robotics, and engineering. Select an opportunity below to open its project page.': '欢迎希望为医疗成像、机器人与工程问题构建有理论依据人工智能系统的学生和访问研究人员。请选择下方机会查看项目详情。',
    'Research opportunities': '研究机会',
    'Open opportunities': '开放职位',
    'Undergraduate Research Assistant and Graduate Thesis': '本科研究助理与研究生学位论文',
    'Undergraduate Research Assistant': '本科研究助理',
    'Spring 2027 · 2 openings': '2027 年春季 · 2 个名额',
    'PhD Thesis': '博士学位论文',
    '1 opening': '1 个名额',
    "Master's Research Assistant": '硕士研究助理',
    'Summer Research Visiting': '暑期访问研究',
    'Summer Research Visitor': '暑期访问研究人员',
    'Short-term research visit · By arrangement': '短期研究访问 · 时间协商',
    'Open': '展开',
    'Opportunities are based at the University of Tennessee at Chattanooga and advised through Laplace Lab.': '以上研究机会设于田纳西大学查塔努加分校，并由 Laplace Lab 提供研究指导。',
    'Position details': '职位详情',
    'Close': '关闭',
    'Research topic': '研究课题',
    'Medical Image Analysis and Processing': '医学图像分析与处理',
    'You will contribute to research on computational methods for understanding and processing medical images. The work may include data preparation, image analysis pipelines, model development, and quantitative evaluation.': '你将参与医学图像理解与处理的计算方法研究，工作可能包括数据准备、图像分析流程、模型开发和定量评估。',
    'Good preparation': '适合的背景',
    'Interest in medical imaging and machine learning, basic programming experience, and the ability to work consistently during the Spring 2027 semester.': '对医学成像和机器学习感兴趣，具备基础编程经验，并能在 2027 年春季学期持续投入研究。',
    'How to express interest': '申请方式',
    'Send a short introduction, your résumé or CV, and a description of relevant coursework or project experience to': '请将简短自我介绍、简历，以及相关课程或项目经历说明发送至',
    'Precision Image Reconstruction for Embodied Surgical Robot Navigation': '面向具身手术机器人导航的精准图像重建',
    'This project studies precise, physically grounded image reconstruction for perception and navigation in embodied surgical robotic systems. The research connects inverse problems, generative modeling, uncertainty, and navigation-aware imaging.': '本项目研究具身手术机器人系统感知与导航中的精准、物理可解释图像重建，连接反问题、生成建模、不确定性和导航感知成像。',
    'A strong background in machine learning, computer vision, medical imaging, optimization, applied mathematics, robotics, or a closely related field.': '具备机器学习、计算机视觉、医学成像、优化、应用数学、机器人或相关领域的扎实背景。',
    'Send a short research statement, your CV, and representative research or project work to': '请将简短研究陈述、简历和代表性研究或项目成果发送至',
    'Agentic Industrial Defect Prediction': '智能体工业缺陷预测',
    'This project develops agentic learning systems for industrial defect prediction. The work focuses on combining predictive models, tool-using agents, and structured reasoning for reliable analysis of industrial data.': '本项目面向工业缺陷预测开发智能体学习系统，重点结合预测模型、工具调用智能体和结构化推理，实现可靠的工业数据分析。',
    'Experience with machine learning, data analysis, software development, or intelligent agents, together with an interest in applied industrial AI.': '具备机器学习、数据分析、软件开发或智能体相关经验，并对工业人工智能应用感兴趣。',
    'Send a short introduction, your résumé or CV, and links to relevant technical work to': '请将简短自我介绍、简历和相关技术成果链接发送至',
    'Summer visitors work on a focused project aligned with Laplace Lab\'s research in generative machine learning, medical and computational imaging, agentic systems, robotics, or inverse problems.': '暑期访问人员将围绕一个聚焦项目开展研究，方向与 Laplace Lab 在生成式机器学习、医疗与计算成像、智能体系统、机器人或反问题方面的研究一致。',
    'Planning a visit': '访问计划',
    'Propose a clear research question, expected visit period, and the experience you would bring. Project scope and availability are agreed before the visit.': '请提出明确的研究问题、预计访问时间和你能够贡献的经验。项目范围和可接收时间将在访问前共同确定。',
    'Send a short project proposal, your CV, and your preferred visit dates to': '请将简短项目计划、简历和期望访问日期发送至',

    'Let’s build useful AI together.': '让我们共同构建实用的人工智能。',
    'For research, student advising, and collaborations in generative AI, medical imaging, and scientific computing:': '如需交流生成式人工智能、医学成像与科学计算方面的研究、学生指导或合作，请联系：',
    'University': '学校',
    'University of Tennessee at Chattanooga': '田纳西大学查塔努加分校',
    'Computer Science and Engineering Department': '计算机科学与工程系',
    'Chattanooga, TN, USA': '美国田纳西州查塔努加',
    'Online': '在线平台',

    'Timeline': '时间线',
    'Index': '索引',
    'by': '作者',
    'Full text': '全文',
    'Journal PDF': '期刊 PDF',
    'Journal HTML': '期刊网页',
    'Supplement': '补充材料',
    'Slides': '幻灯片',
    'Poster': '海报',
    'Source code': '源代码',
    'Data': '数据',
    'Video:': '视频：',
    'Share': '分享',
    'In press...watch this space!': '即将发表，敬请关注。',

    'Research Talk in Sorbonne Université, CNRS': '索邦大学 CNRS 研究报告',
    "I gave a talk for 'Vers un apprentissage pragmatique dans un contexte de données visuelles labellisées limitées' in Sorbonne Université, CNRS": '我在索邦大学 CNRS 作了题为“Vers un apprentissage pragmatique dans un contexte de données visuelles labellisées limitées”的研究报告。',
    'Research Award': '研究奖项',
    'Zihao Wang’s paper ‘One-shot Learning Landmarks Detection’ was selected for the People’s Choice Award at MICCAI DALI 2021.': '王子豪的论文《One-shot Learning Landmarks Detection》获 MICCAI DALI 2021 人民选择奖。',
    'Special issue of Frontiers in computer science': 'Frontiers in Computer Science 专刊',
    'Dec. 21: We are organizing a special issue of Frontiers in computer science with the topic of a few shot learning in computer vision or medical imaging analysis. Any topics related to those domains are welcome. https://lnkd.in/eMY9AG4p': '12 月 21 日：我们正在组织 Frontiers in Computer Science 专刊，主题为计算机视觉或医学图像分析中的小样本学习，欢迎相关方向投稿。https://lnkd.in/eMY9AG4p',
    'Research talk for MICCAI DALI workshop': 'MICCAI DALI 研讨会研究报告',
    'University Award': '大学荣誉奖',
    "I obtain the Prix d'excellence d'Université Côte d'Azur 2021.": '我获得了 2021 年蔚蓝海岸大学卓越奖。',
    'Research Talk STOCOM workshop': 'STACOM 研讨会研究报告',
    'I gave a talk for the Statistical Atlases and Computational Modeling of the Heart (STACOM) workshop at MICCAI, 24 October 2022, Online.': '我于 2022 年 10 月 24 日在 MICCAI 心脏统计图谱与计算建模（STACOM）线上研讨会作研究报告。',
    'SCDM accepted at NeurIPS 2026': 'SCDM 获 NeurIPS 2026 接收',
    'Latent Visual Contrastive Reasoning accepted at IEEE BigData 2026': 'Latent Visual Contrastive Reasoning 获 IEEE BigData 2026 接收',
    'Latent Visual Contrastive Reasoning with Multi-Branch Exploration by Kegeng Tang, Jingbo Wang, Yangming Zhang, Huanshu Zhang, Shaogang Ren, and Zihao Wang, was accepted at the 2026 IEEE International Conference on Big Data.': '唐克耕、王敬博、张扬明、张桓恕、任少刚和王子豪合作的《Latent Visual Contrastive Reasoning with Multi-Branch Exploration》获 2026 IEEE International Conference on Big Data 接收。',
    'Co-advised student Jingbo Wang, jointly advised with Shaogang Ren at UTC, published': '与 UTC 任少刚教授共同指导的学生王敬博发表了',
    'at NeurIPS 2026.': '，发表于 NeurIPS 2026。',
    'Co-Principal Investigator for an NIH AIM AHEAD award ($100,000, 2024–2025).': '担任 NIH AIM AHEAD 项目共同负责人（100,000 美元，2024–2025）。',
    'Co-Principal Investigator for an NIH AIM AHEAD award ($100,000, 2025–2026).': '担任 NIH AIM AHEAD 项目共同负责人（100,000 美元，2025–2026）。',
    'Principal Investigator for the Ruth S. Holmberg Funding award ($4,500, 2025).': '担任 Ruth S. Holmberg 资助项目负责人（4,500 美元，2025）。'
  };

  var phraseZh = [
    ['(Work as PI)', '（项目负责人）'],
    ['Acceptance rate:', '录用率：'],
    ['People’s Choice Award.', '人民选择奖。'],
    ['Contact:', '联系：']
  ];
  var textOriginals = new WeakMap();
  var attributeOriginals = new WeakMap();
  var titleOriginal = document.title;

  function selectedLanguage() {
    try { return localStorage.getItem(STORAGE_KEY) === 'zh' ? 'zh' : 'en'; }
    catch (error) { return 'en'; }
  }

  function translated(value, language) {
    if (!value || language === 'en') return value;
    var match = value.match(/^(\s*)([\s\S]*?)(\s*)$/);
    var lead = match[1];
    var core = match[2];
    var tail = match[3];
    if (exactZh[core]) return lead + exactZh[core] + tail;
    var output = core;
    phraseZh.forEach(function (pair) { output = output.split(pair[0]).join(pair[1]); });
    return lead + output + tail;
  }

  function translateNode(node, language) {
    if (!textOriginals.has(node)) textOriginals.set(node, node.nodeValue);
    node.nodeValue = translated(textOriginals.get(node), language);
  }

  function translateAttributes(root, language) {
    var elements = root.querySelectorAll('[aria-label], [title], [alt]');
    Array.prototype.forEach.call(elements, function (element) {
      var originals = attributeOriginals.get(element) || {};
      ['aria-label', 'title', 'alt'].forEach(function (name) {
        if (!element.hasAttribute(name)) return;
        if (!(name in originals)) originals[name] = element.getAttribute(name);
        element.setAttribute(name, translated(originals[name], language));
      });
      attributeOriginals.set(element, originals);
    });
  }

  function updateScholarLinks(language) {
    Array.prototype.forEach.call(document.querySelectorAll('a[href*="scholar.google.com/citations"]'), function (link) {
      if (!link.dataset.englishHref) link.dataset.englishHref = link.href;
      link.href = language === 'zh' ? link.dataset.englishHref.replace(/([?&])hl=[^&]*/, '$1hl=zh-CN') : link.dataset.englishHref;
    });
  }

  function applyLanguage(language, root) {
    var scope = root || document.body;
    if (!scope) return;
    var walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var parent = node.parentElement;
        if (!parent || /^(SCRIPT|STYLE|NOSCRIPT|CODE|PRE)$/.test(parent.tagName)) return NodeFilter.FILTER_REJECT;
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) { translateNode(node, language); });
    translateAttributes(scope, language);
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = translated(titleOriginal, language);
    var description = document.querySelector('meta[name="description"]');
    if (description) {
      if (!description.dataset.englishContent) description.dataset.englishContent = description.content;
      description.content = translated(description.dataset.englishContent, language);
    }
    updateScholarLinks(language);
    Array.prototype.forEach.call(document.querySelectorAll('[data-language]'), function (button) {
      var active = button.getAttribute('data-language') === language;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function setLanguage(language) {
    try { localStorage.setItem(STORAGE_KEY, language); } catch (error) {}
    applyLanguage(language, document.body);
  }

  window.siteLanguageRefresh = function (root) { applyLanguage(selectedLanguage(), root || document.body); };

  document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.forEach.call(document.querySelectorAll('[data-language]'), function (button) {
      button.addEventListener('click', function () { setLanguage(button.getAttribute('data-language')); });
    });
    applyLanguage(selectedLanguage(), document.body);
  });
}());
