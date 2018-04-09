<template>
<aside class="main-sidebar">
	<section class="sidebar" style="height: auto;">
		<ul class="sidebar-menu tree" data-widget="tree">
			<li class="treeview"><a href="#dashboard"> <i
					class="fa fa-dashboard"></i> <span data-localize="home">Home</span>
			</a></li>
			<li class="treeview"><a href="#instances"> <i
					class="fa fa-server"></i> <span>Instances</span>
			</a></li>
			<li class="treeview"><a href="#history"> <i
					class="fa fa-history"></i> <span>History</span>
			</a></li>
			<li class="treeview"><a href="#download"> <i
					class="fa fa-download"></i> <span>Download</span>
			</a></li>
			<li class="treeview"><a href="#billing"> <i
					class="fa fa-history"></i> <span>Billing</span>
			</a></li>
			<li class="treeview"><a href="#service"> <i
					class="fa fa-history"></i> <span>Service</span>
			</a></li>

		</ul>
	</section>
</aside>
</template>

<script>
import 'admin-lte/node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'admin-lte/node_modules/bootstrap/dist/js/bootstrap.min.js'
//admin-lte
import 'admin-lte/dist/js/adminlte.min.js'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'font-awesome/css/font-awesome.min.css'
export default {
        name: 'db-sidebar'
    }
</script>

<style scoped>
</style>