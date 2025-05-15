export const AnimationConfig = {
  // Durées
  durations: {
    fast: '200ms',
    normal: '300ms',
    slow: '500ms',
    extraSlow: '800ms',
  },

  // Courbes d'accélération
  easings: {
    easeOut: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
  },

  // Délais
  delays: {
    none: '0ms',
    short: '100ms',
    medium: '200ms',
    long: '300ms',
  },

  // Options de performance
  performance: {
    // Utiliser will-change uniquement pour les animations complexes
    useWillChange: false,
    // Forcer l'accélération matérielle
    forceHardwareAcceleration: true,
    // Désactiver les animations si prefers-reduced-motion est activé
    respectReducedMotion: true,
  },
};
