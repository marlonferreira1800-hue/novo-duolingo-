export function canShowMedicalDemo(nodeEnv: string | undefined, explicitOptIn: string | undefined): boolean {
  return nodeEnv === 'development' || explicitOptIn === 'true';
}
