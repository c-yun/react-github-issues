import React from 'react';

const LandingPage = (props) => {
        return (
            <div className="App">
                <h2>👋 Want to submit an issue to bookface/actre?</h2>
                <p>If you have a bug or an idea, read the contributing guidelines before opening an issue.</p>
                <p>Issues labeled good first issue can be good first contributions.</p>

                <form action='/issues'>
                    <input type="submit" value="Go to Issues" action="/issues" />
                </form>
            </div>
            );
        }

export default LandingPage;