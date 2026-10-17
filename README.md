# Informacije

- [DNEVNIK.md](https://github.com/ivrdo/SWE-Project-FER-2026/blob/master/docs/DNEVNIK.md) - Dnevnik rada
- [PROCES.md](https://github.com/ivrdo/SWE-Project-FER-2026/blob/master/docs/PROCES.md) - Način rada tima, projektni alati...
- [ARHITEKTURA.md](https://github.com/ivrdo/SWE-Project-FER-2026/blob/master/docs/ARHITEKTURA.md) - Softwareska arhitektura

# Developeri

## Radno okruženje

### IDE

Radimo u IntelliJ IDEA Ultimate, radno okruženje koje nudi ključnu integraciju s Dockerom.

1. Tko nema, uzeti [JetBrains Student Pack](https://www.jetbrains.com/academy/student-pack/).
2. Instalirati, IntelliJ IDEA Ultimate aktivirati studentsku ponudu (licencu). [Guide](https://www.youtube.com/watch?v=E2QMyGgYLoM)
3. U postavkama instalirati Plugine za Python, Docker. Program će se morati ponovno pokrenuti kako bi se plugini omogućili.

### Docker

1. Skinuti [Docker Desktop](https://docs.docker.com/desktop/) ako ste na Windows ili MacOS. Na Linuxu je dovoljno imati `docker` instaliran s compose pluginom.
2. Za vrijeme rada u projektu Docker Desktop mora biti upaljen.
3. U IntelliJ IDEA Ultimate s upaljenim Docker pluginom, napraviti sljedeće. 
   1. lijevi gornji kut, paralelne crtice stisnuti 
   2. Tools => Services => Docker => Connection
   3. prihvatiti zadane postavke

4. Dolje se pojavljuje prozor s Dockerom.

<img width="40%" height="20%" alt="Image" src="https://github.com/user-attachments/assets/c5f47a93-a61c-4d74-8a04-c955f60dcda2" />

5. Desnim klikom na Docker-compose karticu pojavlja se gumb "Start All". Klikom se pokreću svi servisi.