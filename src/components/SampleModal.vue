
<template>
  <div class="modal-backdrop">
    <div class="modal">

      <div class="select-sample">
        <div class="headers">
            <p class="headers__text">Serial No.</p>
            <p class="headers__text">Sample Mass</p>
            <p class="headers__text">Coating Spec.</p>
            <p class="headers__text">Substrate Spec.</p>
        </div>

        <div class="samples">
            <div class="sample" v-for="sample in samples" :key="sample.id" @click="selectSample(sample)">
                <p class="sample__text">{{ sample.serialNo }}</p>
                <p class="sample__text">{{ sample.sampleWeight }}</p>
                <p class="sample__text">{{ sample.coating }}</p>
                <p class="sample__text">{{ sample.substrate }}</p>
            </div>
        </div>
      </div>

      <label for="params">Choose test parameters</label>
      <input type="file" name="params" @change="paramsSelected($event)"/>

      <label for="results">Choose test results</label>
      <input type="file" name="testParams"  @change="testSelected($event)"/>

      <button @click="addSample">Select sample</button>



      <!-- <header class="modal-header">
        <slot name="header">
          This is the default tile!

          <button
            type="button"
            class="btn-close"
            @click="close"
          >
            x
          </button>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          I'm the default body!
        </slot>
       </section>
       <footer class="modal-footer">
          <slot name="footer">
            I'm the default footer!

            <button
              type="button"
              class="btn-green"
              @click="close"
            >
              Close me!
          </button>
        </slot>
      </footer> -->
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
export default {
  name: 'SampleModal',

  data() {
    return {
      sampleId: null,
      serialNo: null,
      paramsPath: null,
      resultsPath: null,
      samples: []
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    paramsSelected(event) {
      this.paramsPath = event.target.files[0].path
    },
    testSelected(event) {
      this.resultsPath = event.target.files[0].path
    },
    selectSample(sample) {
      this.sampleId = sample.id
      this.serialNo = sample.serialNo
    },
    addSample() {
      const selectedSample = {
        id: this.sampleId,
        serialNo: this.serialNo,
        paramsPath: this.paramsPath,
        resultsPath: this.resultsPath
      }
      this.$emit('sampleSelected', selectedSample)
    }
  },
  created() {
    ipcRenderer.send('samples:get')
    ipcRenderer.on('samples:returned', (event, samples) => {
        samples.forEach(sample => {
            this.samples.push(sample)
        })
    })
  }
};
</script>

<style lang="scss">
.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  }

.modal {
  background: #FFFFFF;
  width: 100%;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.select-sample {
  height: 300px;
  overflow-y: scroll;
  overflow-x: hidden;
}
  

  




  /* .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  } */
</style>