export interface EnthusiasmState {
    languageName: string;
    enthusiasmLevel: number;
}

export interface LanguageState {
    language: string;
}

export interface MainState {
    enthusiasm: EnthusiasmState;
    language: string;

}