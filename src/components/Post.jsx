import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import PropTypes from 'prop-types';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';

export function Post({author, content, publishedAt}) {
  const [comments, setComments] = useState([])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedAtFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedAtRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(e) {
    e.preventDefault();

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(e) {
    setNewCommentText(e.target.value)
  }

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
        {content.map((cont) => {
          if(cont.type === 'paragraph') {
            return <p key={cont.content}>{cont.content}</p>
          }

          if(cont.type === 'link') {
            return <a key={cont.content}><p>{cont.content}</p></a>
          }

          if(cont.type === 'hashtag') {
            return <a key={cont.content}>{cont.content + ' '}</a>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          onChange={handleNewCommentChange}
          placeholder='Deixe um comentário'
          value={newCommentText}
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment key={comment} content={comment} />
        })}
      </div>
        
    </article>
  )
}

Post.propTypes ={
  author: PropTypes.object,
  content: PropTypes.array,
  publishedAt: PropTypes.object
}