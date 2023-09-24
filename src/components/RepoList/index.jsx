import { useEffect, useState } from "react";

import styles from './ReposList.module.css'

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(resposta => resposta.json())
        .then(respostaJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(respostaJson);
            }, 3000)
        });
    }, [nomeUsuario])

    const repositorio = ({id, name, language, html_url}) => {
        if(name !== 'gctoledo') {
            return (
                <li key={id} className={styles.listItem}>
                    <div className={styles.itemName}>
                        <b>Nome:</b> {name}
                    </div>
                    <div className={styles.itemLanguage}>
                        <b>Linguagem:</b> {language}
                    </div>
                    <a href={html_url} target="_blank" className={styles.itemLink}>Visitar no Github</a>
                </li>
                )
        }
    }

    return (
        <div className="container">
        {estaCarregando ? (
        <h1>Carregando...</h1>
        ) : (
        <ul className={styles.list}>
            {repos.map(repositorio)}
        </ul>
        )}
        </div>
    )
}

export default ReposList;