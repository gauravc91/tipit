module ApplicationHelper
  # Page title
  def title(page_title = '')
    title = 'tipit'
    if page_title.empty?
      title
    else
      page_title + ' | ' + title
    end
  end

  # Active Tab (CSS)
  def active_tab_class(*paths)
    active = false
    paths.each { |path| active ||= current_page?(path) }
    active ? 'navactive' : ''
  end

  def active_sidebar_class(*paths)
    active = false
    paths.each { |path| active ||= current_page?(path) }
    active ? 'sidebaractive' : ''
  end
end
