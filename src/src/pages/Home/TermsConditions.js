import React from 'react';
import "./TermsConditions.css";
// import bg from "../../assests/bbg.jpg"

const TermsConditions = () => {
    return (
        <div className='tbody'>
            <div className='bg'>
                {/* <img src={bg} alt='Background'/> */}
            </div>
            <div className='terms-box'>
                <div className='terms-text'>
                    
                    <h2 className='pt-5'>Terms And Conditions</h2>
                    <p>Last Edit : 23/08/2022</p>
                    <p>Greeting User</p>
                    <h1 className='h1'>THIS WEBSITE WITH ALL ITS APPLICATIONS IS AN ONLINE SERVICE PLATFORM OWNED AND OPERATED BY Crowd Content Media Inc. (“Site”).</h1>

                    <p>Welcome to our online store Ticket Kato ! MYCOMPANY and its associates provide their services to you subject to the following conditions. If you visit or shop within this website, you accept these conditions. Please read them carefully.The following are terms of a legal agreement between Crowd Content Media Inc., henceforth “Site”, and you. By accessing, reading and using this website you acknowledge that you have read, understood and agree to be bound by the terms which follow and to comply with all applicable laws and regulations. If you do not agree to these terms, do not use this website. It may contain other proprietary notices and copyright information, the terms of which must be observed and followed. Information on this website may be technically inaccurate or have errors. Be aware that Site may, in its sole discretion and without notice, revise these terms at any time.</p>

                    <h1 className='h1'>NATURE OF THIS SITE:</h1>

                    <p>This site is a platform for persons or companies (“Clients”) in need of written content. It simply connects such Clients with various freelance writers who have a working relationship with Site.</p>

                    <h1 className='h1'>ACCESS TO THIS SITE:</h1>

                    <p>To gain access to this site you must register as a Client using the sign up form at the Site. After gaining access, if you wish to place orders, you will need to add additional information and add funds to your account. All registration data must be accurate and truthful. You do not have a right to have access to this site—Site can terminate your account and deny you from all its services at any time.</p>

                    <h1 className='h1'>DELIVERY OF CONTENT TO CLIENT:</h1>
                    
                        <li>Once the writer has completed the order, it will be posted to the Client’s account for review</li>
                        <li>The Client can accept the order or request a revision</li>
                        <li>The Client can reject the order only after at least one revision request</li>
                        <li>After the Client accepts the order, funds equaling the cost of that order will be removed from the Client’s account</li>
                        <li>If the Client does not accept, request a revision, or reject the order from 72 hours (or the review time period that has been set in the Client’s account) </li>

                    
                    <h1 className='h1'>TRADEMARKS</h1>

                    <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 15 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

                    <h1 className='h1'>LIMITATION OF LIABILITY</h1>

                    <p>UNDER NO CIRCUMSTANCES SHALL SITE OR ANY OF ITS PREDECESSORS, SUCCESSORS, PARENTS, SUBSIDIARIES, AFFILIATES, COACHES, OFFICERS, DIRECTORS, SHAREHOLDERS, INVESTORS, EMPLOYEES, AGENTS, REPRESENTATIVES, ATTORNEYS AND THEIR RESPECTIVE HEIRS, SUCCESSORS AND ASSIGNS BE LIABLE FOR ANY DAMAGES, INCLUDING DIRECT, INCIDENTAL, PUNITIVE, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES THAT DIRECTLY OR INDIRECTLY RESULT FROM THE USE OF, OR THE INABILITY TO USE, THIS WEBSITE OR THE INFORMATION CONTAINED ON THIS WEBSITE OR OBTAINED FROM YOUR USE OF THIS WEBSITE, INCLUDING FOR VIRUSES ALLEGED TO HAVE BEEN OBTAINED FROM THE WEBSITE, EVEN IF SITE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT SHALL IT OR ANY OF ITS PREDECESSORS, SUCCESSORS, PARENTS, SUBSIDIARIES, AFFILIATES, COACHES,OFFICERS, DIRECTORS, SHAREHOLDERS, INVESTORS’, EMPLOYEES’, AGENTS’, REPRESENTATIVES’ AND ATTORNEYS’ AND THEIR RESPECTIVE HEIRS’, SUCCESSORS’ AND ASSIGNS’ SHARE IN ANY LIABILITY. TOTAL LIABILITY DEVOLVES TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION WHETHER IN CONTRACT, TORT (INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE) OR OTHERWISE EXCEEDING $1. SOME JURISDICTIONS MAY NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES IN WHICH CASE SOME OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO ALL USERS.</p>


                    <h4>I Agree To The <span>Terms And Conditions</span> And I Read The Privacy Section</h4>
                    <div className='buttons'>
                        <button className='btn red-btn'>Accept</button>
                        <button className='btn gray-btn'>Decline</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TermsConditions;