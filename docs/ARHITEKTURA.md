# Arhitektura

## Tehnologije

### Programski jezici

- Python: 
    - Pro: **Vrlo jake numeričke biblioteke** (C/C++ biblioteke kao moduli), dinamično tipiziranje => bolja čitljivost
    - Con: Nije *portable* kao Java, dinamično tipiziranje => interpreter ne detektirati tipske greške, spor nativni kod, *package management* sustav kompliciran (pip + venv, poetry, pdm, conda, _novi_ uv, ...)
- Java:
    - Pro: *Portable*, statično tipiziran => tipske greške detektirane, brzi nativni kod, konsolidiran *package management*
    - Con: **Daleko slabije numeričke biblioteke**, statično tipiziran => lošija čitljivost
