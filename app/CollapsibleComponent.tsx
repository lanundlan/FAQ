import React, { useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { DoubleArrowDownIcon, Cross2Icon } from '@radix-ui/react-icons';

const CollapsibleComponent = ({title, body}:{title:string,body:string}) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Collapsible.Root className="CollapsibleRoot" open={open} onOpenChange={setOpen}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span className="Text text-2xl mb-2">
            {title}
          </span>
          <Collapsible.Trigger asChild>
            <button className="IconButton" data-testid='detail-id'>{open ? <Cross2Icon /> : <DoubleArrowDownIcon />}</button>
          </Collapsible.Trigger>
        </div>
        <Collapsible.Content>
          <div>
            <span className="Text">{body}</span>
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  )
}

export default CollapsibleComponent