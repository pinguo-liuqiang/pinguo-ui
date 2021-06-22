## NGSectionTitle

只有title:

```tsx
import React from 'react';
import { NGSectionTitle } from 'pinguo-web-ui';

export default () => <NGSectionTitle title="我是标题" />;
```

title+tip:

```tsx
import React from 'react';
import { NGSectionTitle } from 'pinguo-web-ui';

export default () => <NGSectionTitle title="我是标题" tips="我是二级标题"/>;
```

## API

| 属性      | 说明       | 类型   | 默认值 | 版本 |
| --------- | ---------- | ------ | ------ | ---- |
| title     | 显示的文本 | string | -      |      |
| tips      | 次级文本   | string | -      |      |
| className | class名   | string | -      |      |
