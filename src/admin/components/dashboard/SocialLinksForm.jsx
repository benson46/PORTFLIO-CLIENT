export const SocialLinksForm = ({ links, onChange }) => {
    const handleChange = (platform, value) => {
      onChange({
        ...links,
        [platform]: value
      })
    }
  
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Social Links</h3>
        <div className="space-y-3">
          <div>
            <label className="block mb-1 text-sm">GitHub</label>
            <input
              type="url"
              value={links.github}
              onChange={(e) => handleChange('github', e.target.value)}
              placeholder="https://github.com/username"
              className="w-full bg-gray-700 rounded-lg p-3"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">LinkedIn</label>
            <input
              type="url"
              value={links.linkedin}
              onChange={(e) => handleChange('linkedin', e.target.value)}
              placeholder="https://linkedin.com/in/username"
              className="w-full bg-gray-700 rounded-lg p-3"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Twitter</label>
            <input
              type="url"
              value={links.twitter}
              onChange={(e) => handleChange('twitter', e.target.value)}
              placeholder="https://twitter.com/username"
              className="w-full bg-gray-700 rounded-lg p-3"
            />
          </div>
        </div>
      </div>
    )
  }