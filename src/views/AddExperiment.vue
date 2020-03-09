<template>
    <div class="AddExperiment">
        <div class="container">
            <h1 class="container__title">New Experiment</h1>
            <form @submit.prevent class="add-experiment">
                <div class="flex">
                    <div class="flex__group">
                        <h2>Date (Year Month Day):</h2>
                        <input type="text" v-model="date"/>
                    </div>
                    <div class="flex__group">
                        <h2>Description:</h2>
                        <input type="text" v-model="description"/>
                    </div>
                    <button @click="showModal">Add sample to experiment</button>
                    
                    <div>
                        <div v-for="sample in exSamples" :key="sample.id">
                            <p>{{ sample.serialNo }}</p>
                            <p>{{ sample.paramsPath }}</p>
                            <p>{{ sample.resultsPath }}</p>
                        </div>
                    </div>
                    <SampleModal v-show="isModalVisible" @close="closeModal" @sampleSelected="onSampleSelected"/>
                    <button @click="addExperiment">New Experiment</button>
                    <!-- <button class="btn btn--flex btn--wide btn--form btn--grey">Select Sample <i class="arrow arrow--accent arrow__right"></i></button>
                    <button class="btn btn--flex btn--wide btn--form btn--grey">Test Parameters <i class="arrow arrow--accent arrow__right"></i></button>
                    <button class="btn btn--flex btn--wide btn--form btn--grey">Select Data <i class="arrow arrow--accent arrow__right"></i></button>
                    <button class="btn btn--form btn--green align-end">Submit  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.37835 1.23997L7.12165 0.496669C7.43638 0.181937 7.94531 0.181937 8.2567 0.496669L14.7656 7.00225C15.0804 7.31698 15.0804 7.82591 14.7656 8.13729L8.2567 14.6462C7.94196 14.961 7.43304 14.961 7.12165 14.6462L6.37835 13.9029C6.06027 13.5848 6.06696 13.0659 6.39174 12.7545L10.4263 8.91073H0.803571C0.358259 8.91073 0 8.55247 0 8.10716V7.03573C0 6.59042 0.358259 6.23216 0.803571 6.23216H10.4263L6.39174 2.38841C6.06362 2.07703 6.05692 1.55805 6.37835 1.23997Z" fill="#00B21B" fill-opacity="0.6"/>
                        </svg>
                    </button> -->
                </div>

            </form>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import SampleModal from '../components/SampleModal'
import { ipcRenderer } from 'electron'

export default {
    name: 'AddExperiment',
    components: {
        SampleModal
    },
    data() {
        return {
            isModalVisible: false,
            date: moment().format('YYYY-MM-DD'),
            description: '',
            exSamples: []
        }
    },
    methods: {
        showModal() {
            this.isModalVisible = true
        },
        closeModal() {
            this.isModalVisible = false
        },
        onSampleSelected(selectedSample) {
            this.exSamples.push(selectedSample)
            this.isModalVisible = false
        },
        addExperiment() {
            const expData = {
                date: this.date,
                description: this.description,
                samples: this.exSamples
            }
            ipcRenderer.send('experiment:create', expData)
        }
    }
}
</script>

<style lang="scss">
.add-experiment {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.align-end {
    align-self: flex-end;
}

.flex {
    display: flex;
    flex-direction: column;

    &__group {
        display: flex;
        margin-top: 20px;

        h2 {
            color: var(--text);
            font-size: 14px;
            margin-right: 10px;
        }
    }
}


</style>