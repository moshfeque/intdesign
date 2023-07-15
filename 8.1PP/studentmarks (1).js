var studMarks = [
	{ "name": "Amy", "mark": 90 },
	{ "name": "Bill", "mark": 80 },
	{ "name": "Casey", "mark": 78 },
	{ "name": "David", "mark": 84 },
	{ "name": "Emily", "mark": 92 },
	{ "name": "Frank", "mark": 87 },
	{ "name": "Grace", "mark": 93 },
	{ "name": "Henry", "mark": 79 },
	{ "name": "Isaac", "mark": 85 },
	{ "name": "Jack", "mark": 75 },
	{ "name": "Kate", "mark": 91 },
	{ "name": "Liam", "mark": 76 },
	{ "name": "Mia", "mark": 88 },
	{ "name": "Nick", "mark": 82 },
	{ "name": "Olivia", "mark": 96 },
	{ "name": "Pete", "mark": 70 },
	{ "name": "Quinn", "mark": 83 },
	{ "name": "Rachel", "mark": 89 },
	{ "name": "Steve", "mark": 81 },
	{ "name": "Tom", "mark": 77 },
	{ "name": "Uma", "mark": 86 },
	{ "name": "Vicky", "mark": 94 },
	{ "name": "Wendy", "mark": 72 },
	{ "name": "Xander", "mark": 73 },
	{ "name": "Yara", "mark": 95 },
	{ "name": "Zoe", "mark": 97 }
];

const { createApp } = Vue
const { createVuetify } = Vuetify
const app = createApp()
const vuetify = createVuetify()

app.component('studmarks',
	{
		components: {
			paginate: VuejsPaginateNext,
		},
		
		data: function () {
			return {
				currentPage: 1,
				marks: studMarks
			}
		},
	
		template: `
    <div>
		<h1>Student Marks</h1>

		<v-table>
			<thead>
				<tr>
					<th>Student Name</th>
					<th>Marks</th>
				</tr>
			</thead>	
			<tbody>
				<tr v-for="x in getItems"  >
					<td>{{x.name}}</td>
					<td>{{x.mark}}</td>
				</tr>
			</tbody>
	</v-table>

	<paginate 
		:page-count="9"    
		:page-range="3" 
		:margin-pages="1"
		:click-handler="clickCallback" 
		:prev-text=" 'Prev Page' " 		
		:next-text="'Next Page'" 
		:container-class="'pagination'" 
		:active-class="'currentPage'"
		 >
	</paginate>
	

  	</div>
    `,
		computed: {
			getItems: function () {
				let current = this.currentPage * 3;
				let start = current - 3;
				return this.marks.slice(start, current);
			}
		},
		methods: {
			clickCallback: function (pageNum) {
				this.currentPage = Number(pageNum);
			}
		}
	});

app.use(vuetify).mount('#app')