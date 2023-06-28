import { Trash, ThumbsUp } from '@phosphor-icons/react'


import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src="https://github.com/Lennon-Araujo.png" />

      <div className={styles.commentBox}>

        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
            <strong>Vitória Nunes (você)</strong>
            <time
              title='28 de Junho às 17:35'
              dateTime='2023-06-28 19:36:00'
            >
              Cerca de 2h atrás
            </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p className={styles.commentText}>
            Muito bom Lennon, se garantiu!!!
          </p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span> 
          </button>
        </footer>
      </div>
    </div>
  )
}