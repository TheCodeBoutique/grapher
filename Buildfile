# ==========================================================================
# Project:   Nodegraph
# Copyright: @2012 My Company, Inc.
# ==========================================================================

# CONFIGURE YOUR APPS PAGE TITLE
config :nodegraph, :title => 'Engine Yard Demo: Environment Node Graph' 

# CONFIGURE FRAMEWORKS
config :all, :required => [:sproutcore, :cloudos], :minify => true, :html5_history => true

# CONFIGURE THEMES
 config :all, :theme => 'tcb_theme'
 config :tcb_theme,  :theme_name => 'tcb_theme'