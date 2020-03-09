<template>
  <div class="nav">
      <h1 class="nav__title">Database</h1>
      <div class="nav__group" id="sample">
        <svg width="28" height="30" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.8563 11.6312L19.3438 1.14374C19.1501 0.949991 18.8313 0.949991 18.6376 1.14374L16.5126 3.26249C16.3188 3.45624 16.3188 3.77499 16.5126 3.96874L17.2126 4.66249L2.06256 19.7812C-0.362438 22.2 -0.756188 26.1562 1.47506 28.75C2.76256 30.25 4.56881 31 6.37506 30.9937C8.02506 30.9937 9.67506 30.3687 10.9313 29.1125L26.3251 13.7562L27.0251 14.45C27.2188 14.6437 27.5376 14.6437 27.7313 14.45L29.8563 12.3312C30.0501 12.1437 30.0501 11.825 29.8563 11.6312ZM19.8751 16H10.0626L19.3126 6.76874L24.2188 11.6625L19.8751 16Z" fill="#E6E6E6"/>
        </svg>
        <h3 class="nav__option">Sample</h3>
        <i class="arrow arrow__down"></i>
        <div class="nav__sub-group" v-if="sample">
          <router-link class="nav__sub-option" to="/add-sample">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.37835 1.23997L7.12165 0.496669C7.43638 0.181937 7.94531 0.181937 8.2567 0.496669L14.7656 7.00225C15.0804 7.31698 15.0804 7.82591 14.7656 8.13729L8.2567 14.6462C7.94196 14.961 7.43304 14.961 7.12165 14.6462L6.37835 13.9029C6.06027 13.5848 6.06696 13.0659 6.39174 12.7545L10.4263 8.91073H0.803571C0.358259 8.91073 0 8.55247 0 8.10716V7.03573C0 6.59042 0.358259 6.23216 0.803571 6.23216H10.4263L6.39174 2.38841C6.06362 2.07703 6.05692 1.55805 6.37835 1.23997Z" fill="#B2B2B2"/>
            </svg>
            <h6 class="nav__sub-text">Add</h6>
          </router-link>

          <router-link class="nav__sub-option" to="/edit-sample">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.37835 1.23997L7.12165 0.496669C7.43638 0.181937 7.94531 0.181937 8.2567 0.496669L14.7656 7.00225C15.0804 7.31698 15.0804 7.82591 14.7656 8.13729L8.2567 14.6462C7.94196 14.961 7.43304 14.961 7.12165 14.6462L6.37835 13.9029C6.06027 13.5848 6.06696 13.0659 6.39174 12.7545L10.4263 8.91073H0.803571C0.358259 8.91073 0 8.55247 0 8.10716V7.03573C0 6.59042 0.358259 6.23216 0.803571 6.23216H10.4263L6.39174 2.38841C6.06362 2.07703 6.05692 1.55805 6.37835 1.23997Z" fill="#B2B2B2"/>
            </svg>
            <h6 class="nav__sub-text">Edit</h6>
          </router-link>
        </div>
      </div>
      
      <div class="nav__group" id="experiments">
        <svg width="26" height="30" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path d="M30 23.9833V1.59889C30 0.712837 29.2835 0 28.3929 0H6.42857C2.87946 0 0 2.86467 0 6.39555V27.714C0 31.2449 2.87946 34.1096 6.42857 34.1096H28.3929C29.2835 34.1096 30 33.3968 30 32.5107V31.4448C30 30.9451 29.7656 30.4921 29.404 30.199C29.1228 29.173 29.1228 26.2484 29.404 25.2224C29.7656 24.936 30 24.483 30 23.9833ZM8.57143 8.92712C8.57143 8.70727 8.75223 8.5274 8.97321 8.5274H23.1696C23.3906 8.5274 23.5714 8.70727 23.5714 8.92712V10.2595C23.5714 10.4794 23.3906 10.6592 23.1696 10.6592H8.97321C8.75223 10.6592 8.57143 10.4794 8.57143 10.2595V8.92712ZM8.57143 13.1908C8.57143 12.971 8.75223 12.7911 8.97321 12.7911H23.1696C23.3906 12.7911 23.5714 12.971 23.5714 13.1908V14.5232C23.5714 14.7431 23.3906 14.9229 23.1696 14.9229H8.97321C8.75223 14.9229 8.57143 14.7431 8.57143 14.5232V13.1908ZM25.5402 29.8459H6.42857C5.2433 29.8459 4.28571 28.8932 4.28571 27.714C4.28571 26.5415 5.25 25.5822 6.42857 25.5822H25.5402C25.4129 26.7214 25.4129 28.7067 25.5402 29.8459Z" fill="#E5E5E5"/>
          </g>
          <defs>
          <clipPath id="clip0">
            <rect width="30" height="34.1096" fill="white"/>
          </clipPath>
          </defs>
        </svg>
        <h3 class="nav__option">Experiments</h3>
        <i class="arrow arrow__down"></i>
        <div class="nav__sub-group" v-if="experiment">
          <router-link class="nav__sub-option" to="/add-experiment">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.37835 1.23997L7.12165 0.496669C7.43638 0.181937 7.94531 0.181937 8.2567 0.496669L14.7656 7.00225C15.0804 7.31698 15.0804 7.82591 14.7656 8.13729L8.2567 14.6462C7.94196 14.961 7.43304 14.961 7.12165 14.6462L6.37835 13.9029C6.06027 13.5848 6.06696 13.0659 6.39174 12.7545L10.4263 8.91073H0.803571C0.358259 8.91073 0 8.55247 0 8.10716V7.03573C0 6.59042 0.358259 6.23216 0.803571 6.23216H10.4263L6.39174 2.38841C6.06362 2.07703 6.05692 1.55805 6.37835 1.23997Z" fill="#B2B2B2"/>
            </svg>
            <h6 class="nav__sub-text">Add</h6>
          </router-link>

          <router-link class="nav__sub-option" to="/view-experiments">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.37835 1.23997L7.12165 0.496669C7.43638 0.181937 7.94531 0.181937 8.2567 0.496669L14.7656 7.00225C15.0804 7.31698 15.0804 7.82591 14.7656 8.13729L8.2567 14.6462C7.94196 14.961 7.43304 14.961 7.12165 14.6462L6.37835 13.9029C6.06027 13.5848 6.06696 13.0659 6.39174 12.7545L10.4263 8.91073H0.803571C0.358259 8.91073 0 8.55247 0 8.10716V7.03573C0 6.59042 0.358259 6.23216 0.803571 6.23216H10.4263L6.39174 2.38841C6.06362 2.07703 6.05692 1.55805 6.37835 1.23997Z" fill="#B2B2B2"/>
            </svg>
            <h6 class="nav__sub-text">View</h6>
          </router-link>
        
        </div>
      </div>

      <div class="connected">{{ connected }}</div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: ['connected'],
  data() {
    return {
      sample: true,
      experiment: true
    }
  },
  methods: {
    openSub(id) {
      this.sample = true;
    }
  }
}
</script>


<style lang="scss">
.arrow {
  border: solid var(--text);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transition: all .3s ease;

  &--accent {
    border: solid var(--accent);
    border-width: 0 3px 3px 0;
  }

  &__down{
    transform: rotate(45deg) translateY(-10px);
  }
  &__up{
    transform: rotate(-135deg);
  }

  &__right {
    transform: rotate(-45deg);
  }
}

.nav {
  flex: none;
  margin: 15px;
  height: 95%;
  width: 340px;
  background: #393E4D;
  border: 1px solid #636D87;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    margin: 30px 0 60px 0;
    font-weight: bold;
    font-size: 30px;
    color: #15171D;

    border-bottom: 1px solid #15171D;
  }

  &__group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;

    width: 230px;
    cursor: pointer;
  }

  &__sub-group {
    width: 100%;
    margin-top: 30px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center
  }

  &__option {
    font-size: 20px;
    font-weight: 400;
    color: var(--text);
  }

  &__sub-option {
    display: flex;
    text-decoration: none;
  }

  &__sub-text {
    font-size: 14px;
    font-weight: 400;
    color: var(--text-alt);
    margin-left: 20px;
    margin-bottom: 20px;
  }
}
</style>
