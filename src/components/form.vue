<template>
  <div class="main">
    <form class="main-contain">

      <div class="main-contain-top">
        <div class="main-contain-top-in">
          <a class="main-contain-top-in-label">...</a>
          <input v-model="formModel.name" class="main-contain-top-in-input">
        </div>
        <div class="main-contain-top-in">
          <a class="main-contain-top-in-label">...</a>
          <input v-model="formModel.surname" class="main-contain-top-in-input">
        </div>
      </div>


      <div class="main-contain-top">
        <div class="main-contain-top-in">
          <a class="main-contain-top-in-label">...</a>
          <input v-model="formModel.tcNo" class="main-contain-top-in-input">
        </div>
        <div class="main-contain-top-in">
          <a class="main-contain-top-in-label">...</a>
          <input v-model="formModel.cost" class="main-contain-top-in-input">
        </div>
      </div>


      <div class="main-contain-top">
        <div class="main-contain-top-in">
          <a class="main-contain-top-in-label">...</a>
          <input v-model="formModel.credit" class="main-contain-top-in-input">
        </div>
        <div class="main-contain-top-in">
          <a class="main-contain-top-in-label">...</a>
          <select v-model="formModel.expire" class="main-contain-top-in-select">
            <option class="main-contain-top-in-select-option">sds</option>
            <option class="main-contain-top-in-select-option">sds</option>
          </select>
        </div>
      </div>
      <div class="fd">
        <button class="main-contain-top-button">Devam Et</button>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      formModel: {
        name: "",
        surname: "",
        tcNo: "",
        cost: "",
        credit: "",
        expire: "",
      }
    }
  }
}
</script>

<style scoped>

.fd {
  display: flex;
  align-items: center;
  justify-content: center;
}

.main {
  padding: 22px;

  &-contain {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-top {
      display: flex;

      flex-direction: row;
      justify-content: space-between;

      &-button {
        display: flex;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        display: flex;
        width: 480px;
        margin-top: 22px;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08), 0px 4px 4px rgba(50, 50, 93, 0.11);
        height: 43px;
        background-color: rgb(94, 114, 228);

      }

      &-in {
        display: flex;
        flex-direction: column;

        &-select {
          height: 45px;
          border-radius: 4px;
          border: 1px solid #CAD1D7;
          margin-top: 13px;
          width: 225px;
          padding-left: 13px;
          font-family: Open Sans;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 19px;
          color: #8898AA;
        }

        &-label {
          font-family: Open Sans;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 19px;
          letter-spacing: 0.431667px;
          color: #525F7F;
          margin-top: 13px;
        }

        &-input {
          height: 43px;
          border-radius: 4px;
          border: 1px solid #CAD1D7;
          margin-top: 13px;
          padding-left: 13px;
          font-family: Open Sans;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 19px;
          color: #8898AA;
          width: 210px;
        }
      }

    }
  }
}
</style>