var subjects = [
	{ "code": "ICT10001", "desc": "Problem Solving with ICT", "cp": 12.5, "type": "Core" },
	{ "code": "COS10005", "desc": "Web Development", "cp": 12.5, "type": "Core" },
	{ "code": "INF10003", "desc": "Introduction to Business Information Systems", "cp": 12.5, "type": "Core" },
	{ "code": "INF10002", "desc": "Database Analysis and Design", "cp": 12.5, "type": "Core" },
	{ "code": "COS10009", "desc": "Introduction to Programming", "cp": 12.5, "type": "Core" },
	{ "code": "INF30029", "desc": "Information Technology Project Management", "cp": 12.5, "type": "Core" },
	{ "code": "ICT30005", "desc": "Professional Issues in Information Technology", "cp": 12.5, "type": "Core" },
	{ "code": "ICT30001", "desc": "Information Technology Project", "cp": 12.5, "type": "Core" },
	{ "code": "COS20001", "desc": "User-Centred Design", "cp": 12.5, "type": "Software Development" },
	{ "code": "TNE10005", "desc": "Network Administration", "cp": 12.5, "type": "Software Development" },
	{ "code": "COS20016", "desc": "Operating System Configuration", "cp": 12.5, "type": "Software Development" },
	{ "code": "SWE20001", "desc": "Development Project 1 - Tools and Practices", "cp": 12.5, "type": "Software Development" },
	{ "code": "COS20007", "desc": "Object Oriented Programming", "cp": 12.5, "type": "Software Development" },
	{ "code": "COS30015", "desc": "IT Security", "cp": 12.5, "type": "Software Development" },
	{ "code": "COS30043", "desc": "Interface Design and Development", "cp": 12.5, "type": "Software Development" },
	{ "code": "COS30017", "desc": "Software Development for Mobile Devices", "cp": 12.5, "type": "Software Development" },
	{ "code": "INF20012", "desc": "Enterprise Systems", "cp": 12.5, "type": "Systems Analysis" },
	{ "code": "ACC10007", "desc": "Financial Information for Decision Making", "cp": 12.5, "type": "Systems Analysis" },
	{ "code": "INF20003", "desc": "Requirements Analysis and Modelling", "cp": 12.5, "type": "Systems Analysis" },
	{ "code": "ACC20014", "desc": "Management Decision Making", "cp": 12.5, "type": "Systems Analysis" },
	{ "code": "INF30005", "desc": "Business Process Management", "cp": 12.5, "type": "Systems Analysis" },
	{ "code": "INF30003", "desc": "Business Information Systems Analysis", "cp": 12.5, "type": "Systems Analysis" },
	{ "code": "INF30020", "desc": "Information Systems Risk and Security", "cp": 12.5, "type": "Systems Analysis" },
	{ "code": "INF30001", "desc": "Systems Acquisition & Implementation Management", "cp": 12.5, "type": "Systems Analysis" }
];

const { createApp } = Vue
const { createVuetify } = Vuetify
const app = createApp()
const vuetify = createVuetify()

app.component('subjects',
	{
		components: {
			paginate: VuejsPaginateNext,
		},

		data: function () {
			return {
				currentPage: 1,
				sub: subjects
			}
		},

		template: `
    <div>
		<h1>Units Description</h1>

		<v-table>
			<thead>
				<tr>
					<th>Code</th>
					<th>Description</th>
					<th>Credit Points</th>
					<th>Type</th>
				</tr>
			</thead>	
			<tbody>
				<tr v-for="x in getItems"  >
					<td>{{x.code}}</td>
					<td>{{x.desc}}</td>
					<td>{{x.cp}}</td>
					<td>{{x.type}}</td>
				</tr>
			</tbody>
	</v-table>

	<paginate 
		:page-count="5"    
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
				let current = this.currentPage * 5;
				let start = current - 5;
				return this.sub.slice(start, current);
			}
		},
		methods: {
			clickCallback: function (pageNum) {
				this.currentPage = Number(pageNum);
			}
		}
	});

app.use(vuetify).mount('#app')