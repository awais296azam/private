import React from 'react'
import card from './CSS/card.module.css';

function Studentcard() {
  return (
    <div className={card.Card}>
        <div>
            <h1 className={card.heading}>Student Card</h1>
            <img className={card.img} src="https://images.unsplash.com/photo-1568880893176-fb2bdab44e41?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <div>
                <h3 className={card.sname}>Awais Azam</h3>
                <h4>BS(IT)</h4>
            </div>
            </div>
    </div>
  )
}

export default Studentcard