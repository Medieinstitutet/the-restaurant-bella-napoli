import "../styles/contact.scss";
export const Form = () => {
    return (
        <>
            <div className="form-container">
                <form id="contact">
                    <h2>Kontakta oss</h2>
                    <h3>Varmt välkommen att kontakta oss, vi ser fram emot att hjälpa till! </h3>

                    <fieldset>
                        <input placeholder="Namn" type="text" />
                    </fieldset>

                    <fieldset>
                        <input placeholder="Efternamn" type="text" />
                    </fieldset>

                    <fieldset>
                        <input placeholder="Email" type="email" required/>
                    </fieldset>

                    <fieldset>
                        <input placeholder="000 - 000 00 00" type="tel" required/>
                    </fieldset>

                    <fieldset>
                        <textarea placeholder="Ditt meddelande till oss ..." required></textarea>
                    </fieldset>

                    <fieldset>
                        <button name="submit" type="submit" id="contact-submit">Skicka</button>
                    </fieldset>
                </form>

            </div>
    
        </>
    );
} ;

export default Form;