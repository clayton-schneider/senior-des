<template>
    <div class="edit-sample">
        <div class="container container--large">
            <h1 class="container__title">Samples</h1>

            <div class="headers">
                <p class="headers__text">Serial No.</p>
                <p class="headers__text">Sample Mass</p>
                <p class="headers__text">Coating Spec.</p>
                <p class="headers__text">Substrate Spec.</p>
            </div>

            <div class="samples">
                <div class="sample" v-for="sample in samples" :key="sample.id">
                    <p class="sample__text">{{ sample.serialNo }}</p>
                    <p class="sample__text">{{ sample.sampleWeight }}</p>
                    <p class="sample__text">{{ sample.coating }}</p>
                    <p class="sample__text">{{ sample.substrate }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ipcRenderer } from 'electron'
export default {
    name: 'EditSample',
    data() {
        return {
            samples: []
        }
    },
    created() {
        ipcRenderer.send('samples:get')
        ipcRenderer.on('samples:returned', (event, samples) => {
            samples.forEach(sample => {
                this.samples.push(sample)
                console.log(sample)
            })
        })
    }
}
</script>

<style lang="scss">

.headers {
    width: 100%;
    margin: 50px 0;
    display: flex;
    justify-content: space-between;


    &__text {
        flex: 1;
        text-align: center;
        font-size: 18px;
        font-weight: 400;
        color: var(--text-alt);

    }
}

.samples {
    width: 100%;
}

.sample {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;

    &__text {
        flex: 1;
        text-align: center;
        font-size: 18px;
        font-weight: 400;
        color: var(--text);
        pointer-events: none;
    }
}
</style>