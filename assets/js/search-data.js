// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-resources",
          title: "resources",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resources/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "news-two-papers-are-accepted-by-acl-2025-congrats-to-shiyu-and-yuchen",
          title: 'Two papers are accepted by ACL 2025. Congrats to Shiyu and Yuchen!',
          description: "",
          section: "News",},{id: "news-three-papers-are-accepted-by-emnlp-2025-congrats-to-hengran-minghao-zhikai-and-da-li",
          title: 'Three papers are accepted by EMNLP 2025. Congrats to Hengran, Minghao, Zhikai and...',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-by-cikm-2025-congrats-to-da-li",
          title: 'One paper is accepted by CIKM 2025. Congrats to Da Li!',
          description: "",
          section: "News",},{id: "news-two-papers-are-accepted-by-sigir-ap-2025-congrats-to-hengran-and-minghao",
          title: 'Two papers are accepted by SIGIR-AP 2025. Congrats to Hengran and Minghao!',
          description: "",
          section: "News",},{id: "news-one-papers-is-accepted-by-wsdm-2026-congrats-to-wei-huang",
          title: 'One papers is accepted by WSDM 2026. Congrats to Wei Huang!',
          description: "",
          section: "News",},{id: "news-hengran-and-lulu-have-got-the-national-scholarship-congrats",
          title: 'Hengran and Lulu have got the National Scholarship. Congrats!',
          description: "",
          section: "News",},{id: "people-benben",
          title: 'Benben',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/benben.html";
            },},{id: "people-hengran",
          title: 'Hengran',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/hengran.html";
            },},{id: "people-huangwei",
          title: 'Huangwei',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/huangwei.html";
            },},{id: "people-jiahan",
          title: 'Jiahan',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/jiahan.html";
            },},{id: "people-keping",
          title: 'Keping',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/keping.html";
            },},{id: "people-lida",
          title: 'Lida',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/lida.html";
            },},{id: "people-lulu",
          title: 'Lulu',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/lulu.html";
            },},{id: "people-minghao",
          title: 'Minghao',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/minghao.html";
            },},{id: "people-mingkun",
          title: 'Mingkun',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/mingkun.html";
            },},{id: "people-minzhu",
          title: 'Minzhu',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/minzhu.html";
            },},{id: "people-shiyu",
          title: 'Shiyu',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/shiyu.html";
            },},{id: "people-sihui",
          title: 'Sihui',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/sihui.html";
            },},{id: "people-wanqing",
          title: 'Wanqing',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/wanqing.html";
            },},{id: "people-xiaojie",
          title: 'Xiaojie',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/xiaojie.html";
            },},{id: "people-yingqiong",
          title: 'Yingqiong',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/yingqiong.html";
            },},{id: "people-yuchen",
          title: 'Yuchen',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/yuchen.html";
            },},{id: "people-yuhan",
          title: 'Yuhan',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/yuhan.html";
            },},{id: "people-zhikai",
          title: 'Zhikai',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/zhikai.html";
            },},{id: "resources-evaluating-retrieval-quality-in-retrieval-augmented-generation",
          title: 'Evaluating Retrieval Quality in Retrieval-Augmented Generation',
          description: "",
          section: "Resources",handler: () => {
              window.location.href = "/resources/erag/";
            },},{id: "resources-deepseek-llm-scaling-open-source-language-models-with-longtermism",
          title: 'DeepSeek LLM: Scaling Open-Source Language Models with Longtermism',
          description: "",
          section: "Resources",handler: () => {
              window.location.href = "/resources/deepseek-llm/";
            },},{id: "resources-deepseek-r1-incentivizing-reasoning-capability-in-llms-via-reinforcement-learning",
          title: 'DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning',
          description: "",
          section: "Resources",handler: () => {
              window.location.href = "/resources/deepseek-r1/";
            },},{id: "resources-adversarial-ml-problems-are-getting-harder-to-solve-and-to-evaluate",
          title: 'Adversarial ML Problems Are Getting Harder to Solve and to Evaluate',
          description: "",
          section: "Resources",handler: () => {
              window.location.href = "/resources/adversarial-ml/";
            },},{id: "resources-parametric-retrieval-augmented-generation",
          title: 'Parametric Retrieval Augmented Generation',
          description: "",
          section: "Resources",handler: () => {
              window.location.href = "/resources/prag/";
            },},{id: "resources-drawing-the-line-enhancing-trustworthiness-of-mllms-through-the-power-of-refusal",
          title: 'Drawing the Line: Enhancing Trustworthiness of MLLMs Through the Power of Refusal',
          description: "",
          section: "Resources",handler: () => {
              window.location.href = "/resources/trustworthiness-mllm/";
            },},{id: "resources-adversarial-attack-survey",
          title: 'Adversarial Attack Survey',
          description: "",
          section: "Resources",handler: () => {
              window.location.href = "/resources/adversarial-attack-survey/";
            },},{id: "resources-learning-dynamics-of-llm-finetuning",
          title: 'Learning dynamics of LLM finetuning',
          description: "",
          section: "Resources",handler: () => {
              window.location.href = "/resources/learning-dynamics/";
            },},{id: "resources-mllms-know-where-to-look-training-free-perception-of-small-visual-details-with-multimodal-llms",
          title: 'MLLMs Know Where to Look: Training-free Perception of Small Visual Details with Multimodal...',
          description: "",
          section: "Resources",handler: () => {
              window.location.href = "/resources/mllm-know-where/";
            },},{id: "resources-redeep-detecting-hallucination-in-retrieval-augmented-generation-via-mechanistic-interpretability",
          title: 'ReDeEP: Detecting Hallucination in Retrieval-Augmented Generation via Mechanistic Interpretability',
          description: "",
          section: "Resources",handler: () => {
              window.location.href = "/resources/redeep/";
            },},{id: "resources-how-do-large-language-models-understand-relevance-a-mechanistic-interpretability-perspective",
          title: 'How do Large Language Models Understand Relevance? A Mechanistic Interpretability Perspective',
          description: "",
          section: "Resources",handler: () => {
              window.location.href = "/resources/understand-relevance/";
            },},{id: "resources-constrained-auto-regressive-decoding-constrains-generative-retrieval",
          title: 'Constrained Auto-Regressive Decoding Constrains Generative Retrieval',
          description: "",
          section: "Resources",handler: () => {
              window.location.href = "/resources/constrains-gr/";
            },},{id: "resources-massive-values-in-self-attention-modules-are-the-key-to-contextual-knowledge-understanding",
          title: 'Massive Values in Self-Attention Modules are the Key to Contextual Knowledge Understanding',
          description: "",
          section: "Resources",handler: () => {
              window.location.href = "/resources/massive-values/";
            },},{id: "resources-llm-driven-usefulness-judgment-for-web-search-evaluation",
          title: 'LLM-Driven Usefulness Judgment for Web Search Evaluation',
          description: "",
          section: "Resources",handler: () => {
              window.location.href = "/resources/usefulness-judgement/";
            },},{id: "resources-clip-based-fine-grained-image-retrieval-methods",
          title: 'CLIP-Based Fine-Grained Image Retrieval Methods',
          description: "",
          section: "Resources",handler: () => {
              window.location.href = "/resources/clip-retrieval/";
            },},{id: "resources-monitoring-reasoning-models-for-misbehavior-and-the-risks-of-promoting-obfuscation",
          title: 'Monitoring Reasoning Models for Misbehavior and the Risks of Promoting Obfuscation',
          description: "",
          section: "Resources",handler: () => {
              window.location.href = "/resources/cot-monitor/";
            },},{id: "resources-memory3-language-modeling-with-explicit-memory",
          title: 'Memory3: Language Modeling with Explicit Memory',
          description: "",
          section: "Resources",handler: () => {
              window.location.href = "/resources/memory3/";
            },},{id: "resources-reasoning-about-uncertainty-do-reasoning-models-know-when-they-don-39-t-know",
          title: 'Reasoning about Uncertainty: Do Reasoning Models Know When They Don&amp;#39;t Know?',
          description: "",
          section: "Resources",handler: () => {
              window.location.href = "/resources/reasoning-uncertainty/";
            },},{id: "resources-evaluating-implicit-bias-in-large-language-models-by-attacking-from-a-psychometric-perspective",
          title: 'Evaluating Implicit Bias in Large Language Models by Attacking From a Psychometric Perspective...',
          description: "",
          section: "Resources",handler: () => {
              window.location.href = "/resources/implicit-bias/";
            },},{id: "resources-why-language-models-hallucinate",
          title: 'Why Language Models Hallucinate',
          description: "",
          section: "Resources",handler: () => {
              window.location.href = "/resources/why-hallucinate/";
            },},{id: "resources-llama-see-llama-do-a-mechanistic-perspective-on-contextual-entrainment-and-distraction-in-llms",
          title: 'Llama See, Llama Do: A Mechanistic Perspective on Contextual Entrainment and Distraction in...',
          description: "",
          section: "Resources",handler: () => {
              window.location.href = "/resources/llama-see-llama-do/";
            },},{id: "resources-onerec-technical-report",
          title: 'OneRec Technical Report',
          description: "",
          section: "Resources",handler: () => {
              window.location.href = "/resources/onerec/";
            },},{id: "resources-smarter-retrieval-for-smarter-generation-when-and-how-to-retrieve-for-retrieval-augmented-generation",
          title: 'Smarter Retrieval for Smarter Generation--When and How to Retrieve for Retrieval-Augmented Generation',
          description: "",
          section: "Resources",handler: () => {
              window.location.href = "/resources/cikm-keynote/";
            },},{id: "resources-does-reinforcement-learning-really-incentivize-reasoning-capacity-in-llms-beyond-the-base-model",
          title: 'Does Reinforcement Learning Really Incentivize Reasoning Capacity in LLMs Beyond the Base Model?...',
          description: "",
          section: "Resources",handler: () => {
              window.location.href = "/resources/does-rlvr/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
