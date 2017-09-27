var script = document.createElement(`script`);
script.src = `https://checkout.stripe.com/checkout.js`;
document.getElementsByTagName('head')[0].appendChild(script);

const vStripeCheckout = {
  install(Vue, options) {
    if(!options) {
      console.warn('Stripe options are required dummy!');
    }
    window.addEventListener('load', () => {
      Vue.prototype.$checkout = StripeCheckout.configure(options);
    });
  }
}

export default vStripeCheckout;