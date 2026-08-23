-- Bring existing projects in line with the enquiry form schema.
alter table public.enquiries
  alter column service drop default,
  alter column budget drop default;

alter table public.enquiries
  alter column name type text using name::text,
  alter column email type text using email::text,
  alter column phone type text using phone::text,
  alter column service type text using service::text,
  alter column budget type text using budget::text,
  alter column details type text using details::text;

alter table public.enquiries
  alter column service set default 'Website',
  alter column budget set default 'Basic';

grant select on public.enquiries to authenticated;

drop policy if exists "Authenticated users can view enquiries" on public.enquiries;

create policy "Authenticated users can view enquiries"
on public.enquiries
for select
to authenticated
using (true);
