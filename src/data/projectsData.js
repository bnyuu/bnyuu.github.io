export const projectsData = [
  {
    id: '01',
    number: '01 -',
    title: 'E-Commerce Customer Churn Prediction',
    category: 'Machine Learning Project',
    tag: 'MACHINE LEARNING',
    tagClass: 'tag-ml',
    summary: 'Predictive modeling platform designed to evaluate and forecast customer churn across 50,000 e-commerce customer profiles.',
    highlights: [
      'Built and compared Machine Learning models, including Random Forest, Decision Tree, and Logistic Regression, to predict customer churn using a dataset of 50,000 e-commerce customers.',
      'Handled imbalanced data by exclusively applying the SMOTE (Synthetic Minority Over-sampling Technique) to the training set, effectively preventing data leakage during model training.',
      'Achieved optimal model performance using the Random Forest algorithm, recording a Testing Accuracy of 90.34%, F1-Score of 0.828, and an Excellent ROC-AUC of 0.923.',
      'Implemented Explainable AI (XAI) using SHAP values to extract feature importance, successfully identifying "Customer Service Calls", "Lifetime Value", and "Cart Abandonment Rate" as the strongest churn predictors to guide business retention strategies.'
    ],
    metrics: [
      { label: 'Testing Accuracy', value: '90.34%' },
      { label: 'F1-Score', value: '0.828' },
      { label: 'ROC-AUC Score', value: '0.923' },
      { label: 'Dataset Size', value: '50,000 Rows' }
    ],
    stack: ['Python', 'Scikit-learn', 'Random Forest', 'SMOTE', 'SHAP (XAI)', 'Pandas', 'Streamlit'],
    visualType: 'churn-metrics',
    gallery: [
      {
        id: 'p1-g1',
        title: 'Model Evaluation & ROC-AUC Curve',
        caption: 'Receiver Operating Characteristic (AUC = 0.923) demonstrating superior sensitivity on minority churn class.',
        tag: 'ROC / AUC ANALYSIS',
        type: 'roc-curve'
      },
      {
        id: 'p1-g2',
        title: 'SHAP Feature Importance Summary',
        caption: 'XAI extraction pinpointing Customer Service Calls and LTV as primary drivers of turnover.',
        tag: 'EXPLAINABLE AI',
        type: 'shap-summary'
      },
      {
        id: 'p1-g3',
        title: 'SMOTE Class Resampling Distribution',
        caption: 'Synthetic Minority Over-sampling applied strictly to training fold to eliminate bias and leakage.',
        tag: 'DATA PREPROCESSING',
        type: 'smote-dist'
      },
      {
        id: 'p1-g4',
        title: 'Confusion Matrix & F1-Score Breakdown',
        caption: 'Classification breakdown verifying 90.34% accuracy and 0.828 macro F1-score across 50,000 profiles.',
        tag: 'PERFORMANCE MATRIX',
        type: 'conf-matrix'
      }
    ]
  },
  {
    id: '02',
    number: '02 -',
    title: 'SmartSawit: IoT & AI-Powered Smart Agriculture Dashboard',
    category: 'IoT & Artificial Intelligence',
    tag: 'ARTIFICIAL INTELLIGENCE & IOT',
    tagClass: 'tag-ai',
    summary: 'Real-time digital telemetry monitoring dashboard and AI-driven precision irrigation system for oil palm plantations.',
    highlights: [
      'Developed a real-time digital monitoring web dashboard utilizing Internet of Things (IoT) technology (ESP32, DHT11, and Soil Hygrometer sensors) to track critical plantation metrics such as soil moisture, humidity, and temperature.',
      'Integrated an AI-driven assistant within the platform to analyze environmental data, providing data-driven insights and automated pump controls for precise watering and fertilizing.',
      'Designed the system to optimize resource efficiency, targeting a 5-10% reduction in water and fertilizer costs while preventing over-watering and improving the overall quality of Fresh Fruit Bunches (TBS).'
    ],
    metrics: [
      { label: 'Target Resource Savings', value: '5 - 10%' },
      { label: 'Telemetry Latency', value: '< 500ms' },
      { label: 'Hardware Budget', value: 'Rp600.000' },
      { label: 'Microcontroller', value: 'ESP32 Dual-Core' }
    ],
    hardwareBOM: {
      budget: 'Rp600.000',
      items: [
        { name: 'ESP32 Microcontroller', cost: 'Rp75.800' },
        { name: 'Module DHT11 Sensor Suhu & Humidity', cost: 'Rp10.900' },
        { name: 'Soil Hygrometer Humidity & Moisture Sensor', cost: 'Rp11.910 (Incl. Ongkir)' },
        { name: 'Relay 5V 2 Channel', cost: 'Rp16.900' },
        { name: 'Paket Kabel Jumper', cost: 'Rp31.700' },
        { name: 'Breadboard Solderless', cost: 'Rp12.500' },
        { name: 'Selang 4mm', cost: 'Rp2.188' },
        { name: 'Selang 8mm', cost: 'Rp3.212' },
        { name: 'LCD1602 + I2C Module Blue', cost: 'Rp32.200 (Incl. Ongkir)' },
        { name: 'Sawit Bibit (x6)', cost: 'Rp43.500 (Incl. Ongkir)' },
        { name: 'Sawit Bibit Tambahan (x3)', cost: 'Rp35.000 (Incl. Ongkir)' },
        { name: 'Container', cost: 'Rp120.000' },
        { name: 'Lem Tembak', cost: '-' },
        { name: 'Refill Lem Tembak', cost: 'Rp10.000' },
        { name: 'Selotip Keran', cost: 'Rp7.000' },
        { name: 'Transport ke SMB', cost: 'Rp40.000' },
        { name: 'Additional Fee (Ongkir / App Fee)', cost: 'Rp3.206' }
      ]
    },
    stack: ['ESP32', 'C++ / Arduino', 'DHT11 Sensor', 'Soil Hygrometer', 'Python', 'FastAPI', 'React', 'Time-Series Telemetry'],
    visualType: 'iot-schematic',
    gallery: [
      {
        id: 'p2-g1',
        title: 'Hardware Sensor & ESP32 Schematic',
        caption: 'Pinout architecture interfacing DHT11, Soil Hygrometer, LCD1602 I2C, and 5V Dual Relay.',
        tag: 'CIRCUIT SCHEMATIC',
        type: 'iot-circuit'
      },
      {
        id: 'p2-g2',
        title: 'Web Telemetry Dashboard UI',
        caption: 'Live graphical time-series telemetry interface with sub-500ms latency stream.',
        tag: 'DASHBOARD UI',
        type: 'iot-dashboard'
      },
      {
        id: 'p2-g3',
        title: 'Automated AI Irrigation Logic Flow',
        caption: 'Closed-loop automated irrigation system triggering 5V solenoid pumps based on sensor thresholds.',
        tag: 'SYSTEM LOGIC',
        type: 'iot-logic'
      },
      {
        id: 'p2-g4',
        title: 'Physical Prototype & Palm Container',
        caption: 'Experimental setup in container with 4mm/8mm tubing, pump reservoir, and oil palm seedlings.',
        tag: 'FIELD PROTOTYPE',
        type: 'iot-prototype'
      }
    ]
  },
  {
    id: '03',
    number: '03 -',
    title: 'The Impact of AI Literacy on Academic Integrity and Digital Trust',
    category: 'Academic Research & Empirical Analytics',
    tag: 'RESEARCH',
    tagClass: 'tag-re',
    summary: 'Quantitative statistical research evaluating the empirical impact of generative AI literacy on academic integrity and digital trust among university students.',
    highlights: [
      'Co-authored a quantitative correlational study involving 213 university undergraduates in Bekasi City to evaluate the impact of AI literacy on academic integrity and digital trust, supporting SDG 4.',
      'Coordinated the proposal drafting process and conducted an extensive literature review to establish the conceptual framework of the research.',
      'Analyzed data using IBM SPSS, demonstrating that AI literacy is a powerful positive predictor of both academic integrity (R² = 0.842) and digital trust (R² = 0.843).'
    ],
    metrics: [
      { label: 'Academic Integrity Predictor', value: 'R² = 0.842' },
      { label: 'Digital Trust Predictor', value: 'R² = 0.843' },
      { label: 'Surveyed Population', value: '213 Students' },
      { label: 'Global Initiative', value: 'UN SDG 4' }
    ],
    stack: ['IBM SPSS', 'Structural Equation Modeling (SEM)', 'Multivariate Regression', 'Survey Methodology', 'Hypothesis Testing', 'Python'],
    visualType: 'research-sem',
    gallery: [
      {
        id: 'p3-g1',
        title: 'SEM Path Model Diagram',
        caption: 'Structural Equation Model showing standardized regression weights (β=0.918 & β=0.919, p<0.001).',
        tag: 'STATISTICAL MODEL',
        type: 'sem-model'
      },
      {
        id: 'p3-g2',
        title: 'Regression Variance Analysis (R² = 0.843)',
        caption: 'Explained variance breakdown across Academic Integrity and Digital Trust constructs.',
        tag: 'SPSS REGRESSION',
        type: 'spss-variance'
      },
      {
        id: 'p3-g3',
        title: 'Demographic Cohort Distribution (N = 213)',
        caption: 'Sample distribution of university undergraduates across faculties in Bekasi City.',
        tag: 'SAMPLE DEMOGRAPHICS',
        type: 'sample-demographics'
      },
      {
        id: 'p3-g4',
        title: 'Conceptual Framework & UN SDG 4',
        caption: 'Mapping generative AI literacy dimensions to ethical educational metrics under UN SDG 4.',
        tag: 'RESEARCH FRAMEWORK',
        type: 'research-framework'
      }
    ]
  }
];
