<template>
<header class="main-header">
	<a href="" class="logo"> <!-- mini logo for sidebar mini 50x50 pixels -->
		<span class="logo-mini"><b>E</b>DB</span> <!-- logo for regular state and mobile devices -->
		<span class="logo-lg" data-localize="db-aas"><b></b></span>
	</a>
	<nav class="navbar navbar-static-top">
		<a class="sidebar-toggle" data-toggle="push-menu" role="button"> <span
			class="sr-only">Toggle navigation</span> <span class="icon-bar"></span>
			<span class="icon-bar"></span> <span class="icon-bar"></span>
		</a>

		<div class="navbar-custom-menu">
			<ul class="nav navbar-nav">
				<li class="dropdown notifications-menu"><a href="#"
					class="dropdown-toggle" data-toggle="dropdown"> <i
						class="fa fa-bell-o"></i> <span class="label label-warning">10</span>
				</a>
					<ul class="dropdown-menu">
						<li class="header">You have 10 notifications</li>
						<li>
							<ul class="menu">
								<li><a href="#"> <i class="fa fa-users text-aqua"></i>
										5 new members joined today
								</a></li>
							</ul>
						</li>
						<li class="footer"><a href="#">View all</a></li>
					</ul></li>
				<li class="dropdown user user-menu" id="drop_down"><a
					class="dropdown-toggle" data-toggle="dropdown"
					aria-expanded="false"> <img src="img/user2-160x160.jpg"
						class="user-image" alt="User Image"> <span id="login_name"
						class="hidden-xs"></span>
				</a>
					<ul class="dropdown-menu">
						<!-- User image -->
						<li class="user-header"><img src="img/user2-160x160.jpg"
							class="img-circle" alt="User Image">
							<p>
								Alex Peng - Web Developer <small>Member since Nov. 2012</small>
							</p></li>
						<!-- Menu Footer-->
						<li class="user-footer">
							<div class="pull-right">
								<a href="#login" class="btn btn-default btn-flat">Sign out</a>
							</div>
						</li>
					</ul></li>
			</ul>
		</div>
	</nav>
</header>
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
    name: 'db-header'
}
</script>

<style scoped>
</style>