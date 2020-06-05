export interface JourneyInterface {
  label: string;
  steps: Array<JourneyStepsInterface>
}

export interface JourneyStepsInterface {
  label: string;
}
