<template>
    <div class="AddSample">
        <div class="container">
            <h1 class="container__title">Add Sample</h1>
            <form @submit.prevent="submitSample" class="add-sample">
                <div class="add-sample__grid">
                    <input class="input" type="text" placeholder="Serial No." v-model="serialNo">
                    <input class="input" type="text" placeholder="Sample Weight" v-model="sampleWeight">
                    <input class="input" type="text" placeholder="Coating" v-model="coating">
                    <input class="input" type="text" placeholder="Substrate" v-model="substrate">
                </div>
                <h1>{{ feedback }}</h1>
                <button class="btn btn--margin-large btn--form btn--green">Submit  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.37835 1.23997L7.12165 0.496669C7.43638 0.181937 7.94531 0.181937 8.2567 0.496669L14.7656 7.00225C15.0804 7.31698 15.0804 7.82591 14.7656 8.13729L8.2567 14.6462C7.94196 14.961 7.43304 14.961 7.12165 14.6462L6.37835 13.9029C6.06027 13.5848 6.06696 13.0659 6.39174 12.7545L10.4263 8.91073H0.803571C0.358259 8.91073 0 8.55247 0 8.10716V7.03573C0 6.59042 0.358259 6.23216 0.803571 6.23216H10.4263L6.39174 2.38841C6.06362 2.07703 6.05692 1.55805 6.37835 1.23997Z" fill="#00B21B" fill-opacity="0.6"/>
                                </svg>
                </button>

            </form>
        </div>
        
    </div>

</template>

<script>
import mongoose from 'mongoose'
import { ipcRenderer } from 'electron'

export default {
    name: 'AddSample',
    data() {
        return {
            serialNo: null,
            sampleWeight: null,
            coating: null,
            substrate: null,
            feedback: null
        }
    },
    methods: {
        submitSample() {
            if (!this.serialNo) {
                return this.feedback = 'Please enter a serial number for the sample'
            }
            if (!this.sampleWeight) {
                return this.feedback = 'Please enter a weight for the sample'
            }
            if (!this.coating) {
                return this.feedback = 'Please enter a coating for the sample'
            }
            if (!this.substrate) {
                return this.feedback = 'Please enter a substrate for the sample'
            }
            this.feedback = null
            const data = {
                serialNo: parseInt(this.serialNo),
                sampleWeight: parseInt(this.sampleWeight),
                coating: this.coating,
                substrate: this.substrate
            }
            ipcRenderer.send('createSample:start', data)
        },
    },
    created() {
        ipcRenderer.on('createSample:success', () => {
            this.serialNo = ''
            this.sampleWeight = ''
            this.coating = ''
            this.substrate = ''
            this.feedback = 'Sample was added to the database'
        })
        ipcRenderer.on('createSample:error', (event, err) => {
            this.feedback = err
        })
    }

}
</script>

<style lang="scss">
.add-sample {
    margin-top: 60px;

    &__grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 40px 50px;
    }

}

.btn {
    background-color: transparent;
    border-radius: 20px;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &--form {
        width: 115px;
        height: 30px;
        margin-top: 30px;
        display: flex;
        justify-content: space-around;
    }

    &--green {
        border: 1px solid var(--green);
        color: var(--green);
    }

    &--grey {
        border: 1px solid var(--accent);
        color: var(--accent);
    }

    &--margin-large {
        margin-top: 50px;
    }

    &--wide {
        width: 180px;
    }

    &--flex {
        display: flex;
        align-items: center;

    }
    
}

.container {
    margin: 90px auto 0 auto;
    width: 450px;

    &__title {
        text-align: center;
        font-weight: bold;
        font-size: 40px;
        color: var(--text)
    }

    &--large {
        width: 800px;
    }
}

.input {
    width: 180px;
    height: 30px;
    border: 1px solid var(--accent);
    border-radius: 20px;
    background-color: transparent;

    padding: 0 10px;
    color: var(--text-alt);
    line-height: 30px;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: var(--text-alt);
    }
}

</style>