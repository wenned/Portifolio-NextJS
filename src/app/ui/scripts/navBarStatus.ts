export default function StatusNavBar() {

    const idInicio = document.getElementById('Inicio');
    const posInicio = idInicio?.getBoundingClientRect();

    const idSobre = document.getElementById('Sobre');
    const posSobre = idSobre?.getBoundingClientRect();

    const idProjetos = document.getElementById('Projetos');
    const posProjetos = idProjetos?.getBoundingClientRect();

    const idContato = document.getElementById('Contato');
    const posContato = idContato?.getBoundingClientRect();


    const posElemtento = {
        'Inico': posInicio?.top ?? -Infinity,
        'Sobre': posSobre?.top ?? -Infinity,
        'Projetos': posProjetos?.top ?? -Infinity,
        'Contato': posContato?.top ?? -Infinity,
    }


    return posElemtento
}
