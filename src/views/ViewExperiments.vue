<template>
    <div class="ViewExperiments">
        <div class="container">
            <h1 class="container__title">Experiments</h1>

            <div class="headers">
                <p class="headers__text">Experiment ID</p>
                <p class="headers__text">Sample Serial</p>
            </div>

            <div class="experiments">
                <div class="experiment" v-for="experiment in experiments" :key="experiment.id">
                    <p class="experiment__text">{{ experiment.id }}</p>
                    <p class="experiment__text">{{ experiment.sample }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ViewExperiment",
    data() {
        return {
            experiments: [
                {id: 1, sample: 123},
                {id: 2, sample: 456},
                {id: 3, sample: 789},
            ]
        }
    }
}
</script>

<style lang="scss" >
.experiment {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    transition: transform .3s ease;

    &:hover {
        transform: translateY(-5px);
    }

    &__text {
        flex: 1;
        text-align: center;
        font-size: 18px;
        font-weight: 400;
        color: var(--text);
    }
}
</style>