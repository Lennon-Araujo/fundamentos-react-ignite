import { Avatar } from './Avatar';
import { Comment } from './Comment';
import PropTypes from 'prop-types';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';
export function Post({author, content, publishedAt}) {
  const publishedAtFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedAtRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>{publishedAtRelativeNow}</time>
      </header>

      <div className={styles.content}>
        {content.map((cont, index) => {
          if(cont.type === 'paragraph') {
            return <p key={index}>{cont.content}</p>
          }

          if(cont.type === 'link') {
            return <a key={index}><p>{cont.content}</p></a>
          }

          if(cont.type === 'hashtag') {
            return <a key={index}>{cont.content + ' '}</a>
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe um comentário'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />  
      </div>
        
    </article>
  )
}

Post.propTypes ={
  author: PropTypes.object,
  content: PropTypes.array,
  publishedAt: PropTypes.object
}