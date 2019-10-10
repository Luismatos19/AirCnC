import React from 'react';

export default function Login() {
    return (
        <>
            <p>
                Oferça <strong>spots</strong> para programadores e encontre <strong>talento</strong> para sua empresa.
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL*</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Seu melhor email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}  /*função para setar o valor email*/
                />

                <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    )
}