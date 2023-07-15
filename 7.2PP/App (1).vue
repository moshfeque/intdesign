<template>
  <div>
    <h1>Units</h1>
    <table>
      <thead>
        <tr>
          <th>Code</th>
          <th>Description</th>
          <th>Credit Points</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(unit, index) in units" :key="index">
          <td>{{ unit.code }}</td>
          <td>{{ unit.desc }}</td>
          <td>{{ unit.cp }}</td>
          <td>{{ unit.type }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      units: []
    };
  },
  mounted() {
    fetch("units.json")
      .then(response => response.json())
      .then(data => {
        this.units = data;
      });
  }
};
</script>