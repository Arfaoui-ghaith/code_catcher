import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';


const public_key = "pk_test_51HsF85HKgsi1BtbNAAUMjRs0pCfN1z3Lz3e0Al0Ysj9MYKXrptoVBzI8nMidPNn4byRHyLSCP8H8LcrnaMGJCZVz00mlhJuGIZ";
const stripe = loadStripe(public_key);


const buyCourse = async (coursId) => {
    try{
        const url = `stripe/checkout-session/${coursId}`;
        // 1) Get checkout session from API
        const session = await axios({
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`},
            method: 'get',
            url,
          });
        console.log(session);
        // 2) Create checkout form + chanre credit card
        await (await stripe).redirectToCheckout({
            sessionId: session.data.session.id
        });

    }catch(err){
        console.log(err);
    }
}

export default buyCourse;
