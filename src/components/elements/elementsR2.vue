<template>
  <div>
    <div class="table-container">
      <el-table :data="tableData" :row-style="{ height: '10%' }"
        :header-cell-style="{ 'text-align': 'center', border: 'none' }" :cell-style="rowStyle">
        <el-table-column prop="airStation" label="空压站" min-width="30%">
          <!-- 用插槽的方法来改变颜色! -->
          <template slot-scope="scope">
            <span :style="{ color: '#1953FC' }">{{ scope.row.airStation }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="time1" label="第一次补气压力" min-width="30%">
          <template slot-scope="scope">
            <input type="number" v-model="scope.row.time1" :style="{ color: '#1953FC' }"
              @input="validateInput(scope.row, 'time1')" />
            <span style="margin-left: 10px; color: #1953fc">kPa</span>
          </template>
        </el-table-column>
        <el-table-column prop="time2" label="第二次补气压力" min-width="30%">
          <template slot-scope="scope">
            <input type="number" v-model="scope.row.time2" :style="{ color: '#1953FC' }"
              @input="validateInput(scope.row, 'time2')" /><span style="margin-left: 10px; color: #1953fc">kPa</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getData } from "@/api/runstrategy";
export default {
  props: {
    childData: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.getData2R2();
  },
  computed: {
    lastValidValue() {
      // 记录每行每个字段的上一次有效值
      const result = {};
      this.tableData.forEach((row) => {
        result[row.id] = { time1: row.time1, time2: row.time2 };
      });
      return result;
    },
  },
  methods: {
    validateInput(row, field) {
      const value = row[field];
      if (isNaN(value)) {
        // 如果输入的不是数字，将其重置为上一次的有效值
        row[field] = this.lastValidValue[row.id][field];
      } else {
        // 如果输入的是数字，记录下来
        this.lastValidValue[row.id][field] = value;
      }
    },
    // eslint-disable-next-line
    rowStyle({ row, column, rowIndex, columnIndex }) {
      //设置表格每行间隔边框
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return "text-align:center;border:2px solid #1953FC;border-right-width:0;";
        } else if (columnIndex === 1) {
          return "text-align:center;border:2px solid #1953FC;border-right-width:0;border-left-width:0;";
        } else {
          return "text-align:center;border:2px solid #1953FC;border-left-width:0;";
        }
      }
      if (rowIndex % 2 === 1) {
        return "text-align:center;border:none;";
      }
    },
    getData2R2() {
      getData()
        .then((data) => {
          console.log(data);
          for (let i = 0; i < data.length; i++) {
            this.tableData[i].time1 = data[i].pressure1;
            this.tableData[i].time2 = data[i].pressure2;
          }
        })
        .catch((error) => {
          console.log(error); // 处理错误
        });
    },
    updateR2Data() {
      const newChildData = {
        S1time1: this.tableData[0].time1,
        S1time2: this.tableData[0].time2,
        S2time1: this.tableData[1].time1,
        S2time2: this.tableData[1].time2,
        S3time1: this.tableData[2].time1,
        S3time2: this.tableData[2].time2,
      };
      this.$emit("R2DataChanged", newChildData);
    },
    getData2R2new() {
      //这里从数据取新的值
    }
  },
  data() {
    return {
      tableData: [
        {
          airStation: "空压站1",
          time1: "---------- kPa",
          time2: "---------- kPa",
        },
        {
          airStation: "空压站2",
          time1: "---------- kPa",
          time2: "---------- kPa",
        },
        {
          airStation: "空压站3",
          time1: "---------- kPa",
          time2: "---------- kPa",
        },
      ],
    };
  },
  watch: {
    tableData: {
      deep: true, // 监听对象变化
      handler(newVal, oldVal) {
        this.updateR2Data(); //触发函数
        console.log("tableData changed: ", newVal, oldVal);
      },
    },
  },
  created() {
    this.$watch(
      () => this.$root.iftemp,
      (newVal) => {
        console.log('Global iftemp changed:', newVal)
        if (newVal == "true") {
          this.getData2R2new()
        }
      }
    )
  },
};
</script>

<style scoped>
.table-container {
  width: 680px;
  margin-top: -25px;
  padding: 10px;
}

/*最外层透明*/
/deep/.el-table {
  background-color: transparent !important;
}

/deep/.el-table__expanded-cell {
  background-color: transparent !important;
}

/* 去除最外层的下边框 */
/deep/.el-table::before {
  height: 0px;
}

/* 表格内背景颜色 */
/* 表头单元格 */
/deep/.el-table th {
  background-color: rgba(75, 121, 255, 0.1) !important;
  color: #000 !important;
}

/* 一行 */
/deep/.el-table tr {
  background-color: transparent !important;
  width: 100%;
}

/* 一个单元格 */
/deep/.el-table td {
  background-color: transparent !important;
  font-weight: 10000;
}
</style>
