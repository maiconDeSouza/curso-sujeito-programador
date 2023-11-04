interface AlunoProps {
    nomeAluno: string
    idadeAluno: number
}
export function Aluno({nomeAluno, idadeAluno}: AlunoProps){
    return (
        <span>{nomeAluno} - {idadeAluno}</span>
    )
}