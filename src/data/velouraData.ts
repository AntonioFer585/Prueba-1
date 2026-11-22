export interface Attachment {
  id: string;
  code: string;
  name: string;
  shortTitle: string;
  category: string;
  description: string;
  idealFor: string;
  recommendedTemp: string;
  recommendedFlow: string;
  technique: string;
  image: string;
  imageAlt: string;
}

export interface SpecItem {
  label: string;
  value: string;
  detail: string;
}

export interface RitualStep {
  step: string;
  title: string;
  duration: string;
  description: string;
}

export const IMAGES = {
  heroPlinth: '/assets/aistudio/Black_hair_styler_on_plinth_a97dadd3_2K_8a244374.jpg',
  controlCloseup: '/assets/aistudio/Hair_styler_control_panel_closeup_5b7ee736_2K_27fa93fd.jpg',
  productStudio: '/assets/aistudio/Hair_styler_product_photography_264d41e8_2K_d09e9dc0.jpg',
  attachmentsFlatlay: '/assets/aistudio/Hair_styler_and_attachments_laid_0e3eab69_2K__1__a0064c91.jpg',
  editorialLifestyle: '/assets/aistudio/Woman_styling_hair_with_styler_7ae88db8_2K_b423ffca.jpg',
} as const;

export const ATTACHMENTS: Attachment[] = [
  {
    id: 'coanda-30',
    code: '01',
    name: 'Cilindro Coanda 30 mm (Bidireccional)',
    shortTitle: 'Rizo definido 30 mm',
    category: 'Moldeado por efecto Coanda',
    description:
      'Atrae y envuelve el mechón suavemente mediante flujo de aire laminar, creando rizos simétricos y ondas elásticas sin placas de calor extremo ni pinzas que marquen la fibra.',
    idealFor: 'Cabello fino a medio, media melena o rizos con mayor duración.',
    recommendedTemp: '90 °C · Fijación 28 °C',
    recommendedFlow: 'Nivel III (Turbo)',
    technique: 'Seca hasta el 80%, acerca las puntas y deja que el flujo Coanda envuelva 10 s antes de activar ráfaga fría.',
    image: IMAGES.attachmentsFlatlay,
    imageAlt: 'Set VELOURA 5 en 1 con cilindros Coanda y cabezales sobre piedra travertino',
  },
  {
    id: 'coanda-40',
    code: '02',
    name: 'Cilindro Coanda 40 mm (Ondas Amplias)',
    shortTitle: 'Onda editorial 40 mm',
    category: 'Volumen y movimiento',
    description:
      'Diámetro amplio diseñado para esculpir ondas sueltas de acabado natural, con caída fluida y brillo espejo de raíz a puntas.',
    idealFor: 'Melenas largas o medias que buscan movimiento suave y natural.',
    recommendedTemp: '90 °C · Fijación 28 °C',
    recommendedFlow: 'Nivel II – III',
    technique: 'Trabaja en secciones anchas de 4 cm alternando dirección de giro para un acabado desenfadado.',
    image: IMAGES.attachmentsFlatlay,
    imageAlt: 'Cilindros intercambiables VELOURA en acabado negro mate y oro rosado',
  },
  {
    id: 'paddle-brush',
    code: '03',
    name: 'Cepillo Alisador de Cerdas Firmes',
    shortTitle: 'Alisado pulido',
    category: 'Control antiencrespamiento',
    description:
      'Canaliza el aire paralelo a la cutícula capilar mientras sus púas con punta protectora alinean la fibra para un liso sedoso con caída natural.',
    idealFor: 'Cabello ondulado, grueso o con tendencia al encrespamiento.',
    recommendedTemp: '110 °C',
    recommendedFlow: 'Nivel II (Medio)',
    technique: 'Desliza lentamente desde la raíz con tensión suave siguiendo el sentido natural de la cutícula.',
    image: IMAGES.productStudio,
    imageAlt: 'Moldeador VELOURA con cabezal cepillo alisador acoplado en estudio',
  },
  {
    id: 'oval-volumizer',
    code: '04',
    name: 'Cepillo Voluminizador Ovalado',
    shortTitle: 'Volumen de raíz',
    category: 'Brushing de salón',
    description:
      'Combina cerdas mixtas y salidas radiales de aire caliente para elevar la raíz, aportar cuerpo inmediato y dar forma curvada en las puntas.',
    idealFor: 'Cabello fino, lacio o sin densidad en coronilla.',
    recommendedTemp: '90 °C',
    recommendedFlow: 'Nivel II (Medio)',
    technique: 'Eleva los mechones superiores en ángulo de 90° en la raíz y gira hacia dentro al llegar a puntas.',
    image: IMAGES.editorialLifestyle,
    imageAlt: 'Resultado de brushing con volumen usando el cepillo ovalado VELOURA',
  },
  {
    id: 'pre-dryer',
    code: '05',
    name: 'Boquilla Concentradora de Presecado',
    shortTitle: 'Presecado rápido',
    category: 'Preparación térmica',
    description:
      'Flujo concentrado de alta velocidad que retira el exceso de humedad en minutos para dejar el cabello en el punto exacto previo al moldeado.',
    idealFor: 'Todo tipo de cabello recién lavado antes de acoplar cilindros o cepillos.',
    recommendedTemp: '60 °C – 90 °C',
    recommendedFlow: 'Nivel III (Turbo)',
    technique: 'Pasa de raíz a medios manteniendo 10 cm de distancia hasta notar el cabello ligeramente húmedo al tacto.',
    image: IMAGES.heroPlinth,
    imageAlt: 'Cuerpo principal VELOURA sobre plinto de travertino con salida de aire de precisión',
  },
];

export const TEMPERATURE_MODES = [
  {
    id: 'cool',
    label: 'Frío',
    tempC: 28,
    shortCode: '28°C',
    barCount: 1,
    description: 'Cierra la cutícula al instante y fija la forma del rizo o brushing sin choque térmico.',
    suitability: 'Fijación final para todo tipo de cabello',
  },
  {
    id: 'gentle',
    label: 'Suave',
    tempC: 60,
    shortCode: '60°C',
    barCount: 2,
    description: 'Calor delicado constante para cabello fino, sensibilizado, decolorado o uso diario.',
    suitability: 'Cabello fino, teñido o sensibilizado',
  },
  {
    id: 'style',
    label: 'Moldeado',
    tempC: 90,
    shortCode: '90°C',
    barCount: 3,
    description: 'Equilibrio térmico óptimo para activar el efecto Coanda con retención duradera y brillo.',
    suitability: 'Cabello normal a ondulado (uso estándar)',
  },
  {
    id: 'define',
    label: 'Definición',
    tempC: 110,
    shortCode: '110°C',
    barCount: 4,
    description: 'Máxima energía térmica controlada por sensor NTC 40 veces por segundo para cabello denso.',
    suitability: 'Cabello grueso, abundante o muy rizado',
  },
] as const;

export const AIRFLOW_LEVELS = [
  { id: 1, label: 'Nivel I', rpm: '68.000 rpm', description: 'Brisa precisa para retoques y cabello fino' },
  { id: 2, label: 'Nivel II', rpm: '88.000 rpm', description: 'Flujo equilibrado para brushing y alisado' },
  { id: 3, label: 'Nivel III', rpm: '110.000 rpm', description: 'Potencia Coanda y presecado acelerado' },
] as const;

export const RITUAL_STEPS: RitualStep[] = [
  {
    step: '01',
    title: 'Presecado equilibrado al 80 %',
    duration: '2–3 min',
    description:
      'Utiliza la boquilla concentradora para retirar el exceso de agua. La ligera humedad restante permite que los enlaces de hidrógeno se adapten al moldeado.',
  },
  {
    step: '02',
    title: 'Moldeado por aire laminar',
    duration: '6–8 min',
    description:
      'Acopla el cilindro Coanda o el cepillo elegido con un solo clic magnético. El microprocesador mide la temperatura 40 veces/s para no superar nunca el umbral seleccionado.',
  },
  {
    step: '03',
    title: 'Sellado en frío de 5 segundos',
    duration: '5 s / mechón',
    description:
      'Pulsa la ráfaga fría de 28 °C antes de soltar cada mechón. La cutícula se sella al instante multiplicando el brillo natural y la duración del peinado.',
  },
];

export const TECHNICAL_SPECS: SpecItem[] = [
  { label: 'Motorización', value: 'Brushless 110.000 rpm', detail: 'Flujo laminar de alta presión con bajo nivel acústico (76 dBA)' },
  { label: 'Control Térmico', value: '4 niveles (28 / 60 / 90 / 110 °C)', detail: 'Termistor NTC con lectura continua 40 Hz en pantalla LED' },
  { label: 'Potencia Nominal', value: '1.300 W · 220–240 V', detail: 'Calentamiento uniforme de respuesta instantánea' },
  { label: 'Acabados', value: 'Negro Mate + Oro Rosado', detail: 'Cuerpo acanalado antideslizante y placa en metal cepillado' },
  { label: 'Ergonomía', value: '390 g (cuerpo base)', detail: 'Cable trenzado giratorio 360° de 2,7 metros' },
  { label: 'Mantenimiento', value: 'Filtro magnético extraíble', detail: 'Rejilla inferior desmontable con cepillo limpiador incluido' },
];
