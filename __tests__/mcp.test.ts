
import fs from 'fs';
import path from 'path';

describe('MCP JSON validation', () => {
  it('should be a valid JSON with mcpServers property', () => {
    const filePath = path.join(process.cwd(), '.idx', 'mcp.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const json = JSON.parse(fileContent);
    expect(json).toHaveProperty('mcpServers');
  });
});
