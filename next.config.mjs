import nextra from 'nextra'
import { remarkMermaid } from '@theguild/remark-mermaid'
 
// Set up Nextra with its configuration
const withNextra = nextra({
  // Add remark plugins for Mermaid diagram support
  mdxOptions: {
    remarkPlugins: [remarkMermaid]
  }
})
 
// Export the final Next.js config with Nextra included
export default withNextra({
  // ... Add regular Next.js options here
})
