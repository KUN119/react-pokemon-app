export interface DamageFromAndTo {
    from: SeparateDamages;
    to: SeparateDamages;
}

export interface SeparateDamages {
    double_damage?: Damage[];
    half_damage?:   Damage[];
    no_damage?:     Damage[];
}

export interface Damage {
    damageValue: string;
    name:        string;
    url:         string;
}
