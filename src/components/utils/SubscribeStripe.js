import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';


const public_key = "pk_test_51HsF85HKgsi1BtbNAAUMjRs0pCfN1z3Lz3e0Al0Ysj9MYKXrptoVBzI8nMidPNn4byRHyLSCP8H8LcrnaMGJCZVz00mlhJuGIZ";
const stripe = loadStripe(public_key);


const Subscribe = async (data) => {
    try{
        const url = `stripe/checkout-subscribe-session/`;
        // 1) Get checkout session from API
        const session = await axios({
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`},
            method: 'post',
            url,
            data
          });
        console.log(session);
        
        localStorage.setItem('sub_payment_intent_id',session.data.session.payment_intent);
        localStorage.setItem('nbMonth', data.nbMonth);
        
        // 2) Create checkout form + chanre credit card
        await (await stripe).redirectToCheckout({
            sessionId: session.data.session.id
        });

    }catch(err){
        console.log(err);
    }
}

export default Subscribe;